import { Client } from 'pg';

export async function get(): Promise<{ status: number, body: any }> {
    const client = new Client({
        ssl: { rejectUnauthorized: false },
      });
    await client.connect();
    const query = `
    SELECT name, url FROM source;`

    const res = await client
    .query(query)
    .then(r => r)
    .catch(e => { console.log(e.stack); return {rows: []}; } )
    // if no match, return something that indicates no match
    await client.end()
    return {status: 200, body: {rows: res.rows}}
}
