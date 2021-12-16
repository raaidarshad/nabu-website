<script>
    import Paper, { Title, Content } from '@smui/paper';
    export let cluster;
</script>

<main>
    <Paper variant="outlined" style="border: 1px solid #777; margin-bottom: 20px;">
        <Title><span class="topic-summary-title">Summary</span></Title>
        <Content>
            <div class="topic-summary-count">
                <p><span class="topic-summary-count">{cluster.articles.length}</span> articles from <span class="topic-summary-count">{cluster.source_count}</span> sources for this topic.</p>
            </div>
            <div class="topic-summary-keywords">
                <p>
                    <span>Topic keywords: </span>
                    {#each cluster.topics as item, idx}
                    <span style="color: hsl(0, 0%, {(1-item.weight/cluster.topics[0].weight)*100}%">{item.term}</span>{#if idx + 1 !== cluster.topics.length}<span style="color: hsl(0, 0%, {(1-item.weight/cluster.topics[0].weight)*100}%">, </span>{/if}
                    {/each}
                </p>
            </div>
        </Content>
      </Paper>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    p {
        font-size: 24px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 400;
    }

    .topic-summary-title {
        font-size: 28px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 600;
    }

    .topic-summary-count {
        font-weight: 600;
    }

    @media screen and (max-width: 900px) {
        p {
            font-size: 20px;
        }

        .topic-summary-title {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 661px) {
        p {
            font-size: 14px;
        }

        .topic-summary-title {
            font-size: 18px;
        }
    }
</style>