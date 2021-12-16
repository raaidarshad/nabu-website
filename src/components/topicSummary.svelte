<script>
    export let cluster;
</script>

<main>
    <p>Number of articles: {cluster.articles.length}</p>
    <p>Number of sources: {cluster.source_count}</p>
    <p>Keywords: {#each cluster.topics as topic}{topic.term}.{/each}</p>
</main>

<style>
    
</style>