<script lang="ts">
    type Article = {
        headline: string;
        url: string;
        sourceName: string;
        date: string;
    }
    export let rowData: Article;
    export let num: number;
</script>

<main>
    <div>
        <span class="article-number">{(num <10 ? `0${num}` : num)}</span>
        <a href={rowData.url} class="article-headline">{rowData.headline}</a>
        <span class="article-source">{rowData.sourceName}</span>
        <span class="article-date">{rowData.date}</span>
    </div>
    <hr/>
</main>

<style>
    hr {
        margin: 28px 0;
    }

    div {
        display: flex;
        align-items: center;
    }

    .article-number {
        font-family: 'Roboto Mono', monospace;
        font-size: 20px;
        width: 85px;
    }

    .article-headline {
        font-family: 'Alegreya', serif;
        font-size: 30px;
        flex-grow: 12;
        color: black;
        text-decoration: none;
    }
    
    .article-source {
        font-family: 'Catamaran', sans-serif;
        font-size: 26px;
        width: 200px;
        text-align: left;
    }

    .article-date {
        font-family: 'Catamaran', sans-serif;
        font-size: 26px;
        width: 85px;
        text-align: right;
    }
</style>