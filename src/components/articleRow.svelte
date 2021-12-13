<script lang="ts">
    type Article = {
        title: string;
        url: string;
        source: string;
        date: string;
    }
    export let rowData: Article;
    export let num: number;
    export let hasBottomBar: boolean;
</script>

<main>
    <div>
        <span class="article-number">{(num <10 ? `0${num}` : num)}</span>
        <a href={rowData.url} class="article-headline">{rowData.title}</a>
        <span class="article-source">{rowData.source}</span>
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
        width: 5%;
    }

    .article-headline {
        font-family: 'Alegreya', serif;
        font-size: 28px;
        width: 65%;
        color: black;
        text-decoration: none;
    }
    
    .article-source {
        font-family: 'Catamaran', sans-serif;
        font-size: 24px;
        width: 20%;
        text-align: left;
    }

    .article-date {
        font-family: 'Catamaran', sans-serif;
        font-size: 24px;
        width: 10%;
        text-align: right;
        /* overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; */
    }

    @media screen and (max-width: 900px) {
        .article-number {
            font-size: 16px;
            /* width: 50px; */
        }

        .article-headline {
            font-size: 24px;
        }

        .article-source {
            font-size: 20px;
            /* width: 180px; */
        }

        .article-date {
            font-size: 20px;
            /* width: 50px; */
        }

        div {
            margin: 20px 0;
        }
    }

    @media screen and (max-width: 661px) {
        .article-number {
            font-size: 12px;
            width: 10%;
            /* width: 30px; */
        }

        .article-headline {
            font-size: 18px;
        }

        .article-source {
            font-size: 14px;
            width: 25%;
            /* width: 140px; */
        }

        .article-date {
            font-size: 14px;
            display: none;
            width: 0;
            /* width: 30px; */
        }

        div {
            margin: 18px 0;
        }
    }
</style>