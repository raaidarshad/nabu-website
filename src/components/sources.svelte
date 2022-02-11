<script>
import Item from "@smui/list/src/Item.svelte";

    // hit endpoint to grab source + feed data
    async function getData() {
        const latestData = await (await fetch('/sources')).json();
        return latestData;
    }
</script>

<main>
    <ul>
        {#await getData()}
            <p>waiting...</p>
        {:then theData}
            {#each theData.rows as item}
                <li>
                    <a href={'https://' + item.url} target='_blank'>{item.name}</a>
                </li>
            {/each}
        {/await}
    </ul>
</main>

<style>

</style>