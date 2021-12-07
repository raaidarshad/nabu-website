<script lang="ts">
    type Article = {
        headline: string;
        url: string;
        sourceName: string;
        date: string;
    }
    export let rowData: Article;
    export let num: number;
    export let hasBottomBar: boolean;
</script>

<main>
    <div>
        <span class="article-number">{(num <10 ? `0${num}` : num)}</span>
        <a href={rowData.url} class="article-headline">{rowData.headline}</a>
        <span class="article-source">{rowData.sourceName}</span>
        <span class="article-date">{rowData.date}</span>
    </div>
    {#if hasBottomBar}
        <hr/>
    {/if}
</main>

<style>
    hr {
        border: none;
        height: 1px;
        color: black;
        background-color: black;
    }
    div {
        display: flex;
        align-items: center;
        margin: 28px 0;
    }

    .article-number {
        font-family: 'Roboto Mono', monospace;
        font-size: 20px;
        width: 85px;
    }

    .article-headline {
        font-family: 'Alegreya', serif;
        font-size: 30px;
        min-width: 65%;
        color: black;
        text-decoration: none;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
    .article-source {
        font-family: 'Catamaran', sans-serif;
        font-size: 26px;
        width: 200px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .article-date {
        font-family: 'Catamaran', sans-serif;
        font-size: 26px;
        width: 85px;
        text-align: right;
    }

    @media screen and (max-width: 900px) {
        .article-number {
            font-size: 16px;
            width: 50px;
        }

        .article-headline {
            font-size: 24px;
        }

        .article-source {
            font-size: 20px;
            width: 180px;
        }

        .article-date {
            font-size: 20px;
            width: 50px;
        }

        div {
            margin: 20px 0;
        }
    }

    @media screen and (max-width: 661px) {
        .article-number {
            font-size: 12px;
            width: 30px;
        }

        .article-headline {
            font-size: 18px;
        }

        .article-source {
            font-size: 14px;
            width: 140px;
        }

        .article-date {
            font-size: 14px;
            width: 30px;
        }

        div {
            margin: 18px 0;
        }
    }
</style>