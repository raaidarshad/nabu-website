import { Client } from 'pg';


export async function post({ request }): Promise<{ status: number, body: any }> {
    const client = new Client({
        ssl: { rejectUnauthorized: false },
      });
    await client.connect();
    const body = await request.json();
    // easy way to make sure that the url works even if there are some query params, otherwise the url passes through untouched
    const targetUrl = body.target.split('?')[0];

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
    AND a.id != (SELECT id FROM target)
    ORDER BY added_at ASC;`

    const res = await client
    .query(query, [`%${targetUrl}%`])
    .then(r => r)
    .catch(e => { console.log(e.stack); return {rows: []}; } );
    // if no match, return something that indicates no match
    await client.end();

    // log to log store (graphjson)
    const event = {
      'url': targetUrl,
      'hit_count': res.rows.length,
      'client': request.headers.get('User-Agent')
    };

    const payload = {
      api_key: process.env.GJ_API_KEY,
      collection: "similarity_hits",
      json: JSON.stringify(event),
      timestamp: Math.floor(new Date().getTime() / 1000),
    };

    await fetch("https://api.graphjson.com/api/log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    return {status: 200, body: {rows: res.rows}}
}
