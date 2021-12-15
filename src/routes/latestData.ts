export async function get(): Promise<{ body: any }> {
    const result = await(
        // TODO the url this is fetching from should be parametrized, probably env vars
        await fetch('https://ptb-bucket.nyc3.digitaloceanspaces.com/latest.json')
    ).json();
    return {body: result}
}
