import { Client } from 'pg';

export async function get(): Promise<{ status: number, body: any }> {
    const client = new Client({
        ssl: { rejectUnauthorized: false },
      });
    await client.connect();
    const query = `
    SELECT s.name, json_agg(r.url) AS feeds FROM source s
    JOIN rssfeed r on s.id = r.source_id WHERE r.is_okay
    GROUP BY s.name
    ORDER BY s.name;`

    const res = await client
    .query(query)
    .then(r => r)
    .catch(e => { console.log(e.stack); return {rows: []}; } )
    // if no match, return something that indicates no match
    await client.end()
    return {status: 200, body: {rows: res.rows}}
}
