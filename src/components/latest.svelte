<script lang="ts">
    import TopicSection from '../components/topicSection.svelte';
    import CircularProgress from '@smui/circular-progress';
    import SegmentedButton, { Segment } from '@smui/segmented-button';
    import IconButton from '@smui/icon-button';
    import { Label } from '@smui/button';
    import Select, { Option } from '@smui/select';

    export let isSection: boolean = true;
    export let topicLimit: number = 3;

    let rangeChoices = ['12h', '1d', '3d'];
    let rangeSelected = '1d';
    let sortChoices = ['Sources', 'Articles'];
    let sortSelected = 'Sources';

    async function loadData(selected) {
        const mapped = {'12h': '12_hours', '1d': '1_days', '3d': '3_days'}[selected];
        const latestData = await (await fetch(`/latest-${mapped}`)).json();
        return latestData;
    };

    $: theData = loadData(rangeSelected);
    $: theTime = theData.then((d) => {
        var localTime = new Date();
        const timeParts = d.added_at.split(" ")[1].split(".")[0].slice(0, 5).split(":");
        localTime.setUTCHours(timeParts[0]);
        localTime.setUTCMinutes(timeParts[1]);
        localTime.setUTCSeconds(0);
        return localTime.toLocaleTimeString();
    });


    $: theClusters = theData.then((d) => { 
        return d.clusters.sort(compareFnFactory(sortSelected));
         });

    function compareFnFactory(sortType) {
        if (sortType === 'Sources') {
            return (a, b) => { return b.source_count - a.source_count; }
        } else {
            return (a, b) => { return b.articles.length - a.articles.length; }
        }
    }
</script>

<main>
    <div id="latest-content">
        {#if isSection}
            <div id="latest-section-head">
                <h1 id="latest" class="small-header">Here's the Latest</h1>
                <IconButton class="material-icons small-header" href="/latest" style="color: black;">arrow_forward</IconButton>
            </div>
        {:else}
            <h1 id="latest-page-main-section">Here's the Latest</h1>
            <div id="latest-nav">
                <div id="latest-nav-range">
                    <p class="latest-nav-text">News from last:</p>
                    <div id="latest-nav-range-buttons">
                        <SegmentedButton segments={rangeChoices} let:segment singleSelect bind:selected={rangeSelected}>
                            <Segment {segment}>
                            <Label>{segment}</Label>
                            </Segment>
                        </SegmentedButton>
                    </div>
                    <!-- switch to menu at 681px width -->
                    <div id="latest-nav-range-menu">
                        <Select bind:value={rangeSelected}>
                            {#each rangeChoices as rc}
                            <Option value={rc}>{rc}</Option>
                            {/each}
                        </Select>
                    </div>
                </div>

                <div id="latest-nav-last-updated">
                    <p class="latest-nav-text">Last updated:</p>
                    {#await theTime then latestTime}
                        <p class="latest-nav-text">{latestTime}</p>
                    {/await}
                </div>

                <div id="latest-nav-sort">
                    <p class="latest-nav-text">Sort by # of:</p>
                    <div id="latest-nav-sort-buttons">
                        <SegmentedButton segments={sortChoices} let:segment singleSelect bind:selected={sortSelected}>
                            <Segment {segment}>
                            <Label>{segment}</Label>
                            </Segment>
                        </SegmentedButton>
                    </div>
                    <!-- switch to menu at 681px width -->
                    <div id="latest-nav-sort-menu">
                        <Select bind:value={sortSelected}>
                            {#each sortChoices as sc}
                            <Option value={sc}>{sc}</Option>
                            {/each}
                        </Select>
                    </div>
                </div>
            </div>
        {/if}

        <hr/>
        {#await theClusters}
        <div id="waiting">
            <CircularProgress style="height: 32px; width: 32px;" indeterminate />
        </div>
        {:then latestClusters}
            {#each latestClusters.slice(0, topicLimit) as cluster}
                <TopicSection {cluster} keywordLimit={3}/>
            {/each}
        {/await}
    </div>
</main>

<style>
    #latest-section-head {
        display: flex;
        align-items: center;
    }

    #latest {
        margin-right: 10px;
    }

    #latest-nav-range-menu {
        display: none;
    }

    #latest-nav-sort-menu {
        display: none;
    }

    #latest-page-main-section {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 600;
        text-align: center;
        margin-bottom: 0;
    }

    #latest-nav {
        display: flex;
        gap: 5%;
        align-items: flex-start;
        margin-bottom: 40px;
    }

    #latest-nav-range {
        width: 30%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #latest-nav-last-updated {
        width: 30%;
    }

    .latest-nav-text {
        font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        color: grey;
        text-align: center;
        margin: 0;
    }

    #latest-nav-sort {
        width: 30%;
        display: flex;
        flex-direction: column;
        text-align: center;
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
        height: 400px;
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

        .latest-nav-text {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 690px) {
        #latest-nav-range-buttons {
            display: none;
        }

        #latest-nav-range-menu {
            display: flex;
        }

        #latest-nav-sort-buttons {
            display: none;
        }

        #latest-nav-sort-menu {
            display: flex;
        }
    }

    @media screen and (max-width: 661px) {
        main {
            margin-bottom: 80px;
        }

        #latest-page-main-section {
            font-size: 36px;
        }

        .latest-nav-text {
            font-size: 11px;
        }
    }
</style>