import { Client } from 'pg';


export async function post({ request }): Promise<{ status: number, body: any }> {
    const client = new Client({
        ssl: { rejectUnauthorized: false },
      });
    await client.connect();
    const body = await request.json();
    const query = `
    WITH onedayclusters AS (SELECT *
        FROM articleclusterlink acl1
                 JOIN (SELECT * FROM articlecluster WHERE "end" - begin = '1 day') ac1
                      ON acl1.article_cluster_id = ac1.id)
    , target AS (SELECT *
    FROM article
    WHERE url ilike $1)

    SELECT a.url, a.published_at AS date, a.title, s.name AS source
    FROM article a
    JOIN source s on s.id = a.source_id
    JOIN
    (SELECT DISTINCT onedayclusters.article_id
    FROM onedayclusters
    JOIN
    articleclusterlink a2 ON onedayclusters.article_cluster_id = a2.article_cluster_id
    WHERE a2.article_id = (SELECT id FROM target)) b ON a.id = b.article_id
    ORDER BY added_at ASC;`

    const res = await client
    .query(query, [`%${body.target}%`])
    .then(r => r)
    .catch(e => { console.log(e.stack); return {rows: []}; } )
    // if no match, return something that indicates no match
    await client.end()
    return {status: 200, body: {rows: res.rows}}
}
