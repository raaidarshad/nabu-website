<script>
    import TopicSection from '../components/topicSection.svelte';
</script>

<main>
    <div id="latest-content">
        <h1 id="latest" class="small-header">Here's the Latest</h1>
        <hr/>
        <TopicSection topics={[{term: "Glasgow", weight: .8}, {term: "COP26", weight: .7}, {term: "Climate", weight: .6}]} articles={[{headline: "First headline", url: "https://www.google.com", sourceName: "First Source", date: "11.11.21"}, {headline: "Second headline", url: "https://www.google.com", sourceName: "Second Source", date: "11.11.21"}, {headline: "Third headline", url: "https://www.google.com", sourceName: "Third Source", date: "14.11.21"}]}/>
        <TopicSection topics={[{term: "Manchin", weight: .8}, {term: "Democrats", weight: .6}, {term: "Tax", weight: .5}]} articles={[]}/>
        <TopicSection topics={[{term: "Baldwin", weight: .8}, {term: "Shooting", weight: .7}, {term: "Rust", weight: .5}]} articles={[]}/>
    </div>
</main>

<style>
    main {
        margin-top: 60px;
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
</style>