export async function get({ params }): Promise<{ body: any }> {
    const result = await(
        // TODO the url this is fetching from should be parametrized, probably env vars
        await fetch(`https://ptb-bucket.nyc3.digitaloceanspaces.com/latest_${params.range}.json`)
    ).json();
    return {body: result}
}
