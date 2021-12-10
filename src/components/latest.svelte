<script>
    import TopicSection from '../components/topicSection.svelte';

    export async function loadData() {
        const latestData = await (await fetch('/latestData')).json();
        console.log(latestData.clusters);
        return latestData;
    }
</script>

<main>
    <div id="latest-content">
        <h1 id="latest" class="small-header">Here's the Latest</h1>
        <hr/>
        {#await loadData()}
            <p>WAITING</p>
        {:then latestData}
            {#each latestData.clusters.slice(0, 3) as cluster}
                <TopicSection topics={cluster.topics} articles={cluster.articles} />
            {/each}
        {/await}
    </div>
</main>

<style>
    main {
        padding-top: 20px;
        margin-bottom: 110px;
        padding-left: 10px;
        padding-right: 10px;
    }

    #latest-content {
        min-width: 900px;
        max-width: 1300px;
		display: block;
		margin: 0 auto;
    }

    @media screen and (max-width: 900px) {
        #latest-content {
            max-width: 900px;
            min-width: 300px;
        }
    }

    @media screen and (max-width: 661px) {
        main {
            margin-bottom: 80px;
        }
    }
</style>