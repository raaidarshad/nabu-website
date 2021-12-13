<script lang="ts">
    import TopicSection from '../components/topicSection.svelte';
    import CircularProgress from '@smui/circular-progress';

    export let isSection: boolean = true;
    export let topicLimit: number = 3;

    export async function loadData() {
        const latestData = await (await fetch('/latestData')).json();
        return latestData;
    }
</script>

<main>
    <div id="latest-content">
        {#if isSection}
            <h1 id="latest" class="small-header">Here's the Latest</h1>
        {:else}
            <h1 id="latest-page-main-section">Here's the Latest</h1>
        {/if}

        <hr/>
        {#await loadData()}
        <div id="waiting">
            <CircularProgress style="height: 32px; width: 32px;" indeterminate />
        </div>
        {:then latestData}
            {#each latestData.clusters.slice(0, topicLimit) as cluster}
                <TopicSection topics={cluster.topics} articles={cluster.articles} keywordLimit={3}/>
            {/each}
        {/await}
    </div>
</main>

<style>
    #latest-page-main-section {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 600;
        text-align: center;
        /* color: #d2cfc9; */
    }

    main {
        padding-top: 20px;
        margin-bottom: 110px;
        padding-left: 10px;
        padding-right: 10px;
    }

    #waiting {
        display: flex;
        justify-content: center;
        margin-top: 100px;
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

        #latest-page-main-section {
            font-size: 60px;
        }
    }

    @media screen and (max-width: 661px) {
        main {
            margin-bottom: 80px;
        }

        #latest-page-main-section {
            font-size: 50px;
        }

        #latest-page-main-section {
            font-size: 30px;
        }
    }
</style>