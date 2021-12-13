<script lang="ts">
    import { slide } from "svelte/transition";
    import ArticleRow from "../components/articleRow.svelte";

    type weightedTopic = {
        term: string;
        weight: number;
    }

    export let topics: weightedTopic[];
    export let articles;
    export let keywordLimit: number;
	let isOpen = false
	const toggle = () => isOpen = !isOpen
</script>

<main>
    <div>
        <button class="topic-section-header" on:click={toggle} aria-expanded={isOpen}>
            <span class="topic-section-top-topics">
                {#each topics.slice(0, keywordLimit) as item, idx}
                    <span style="color: hsl(0, 0%, {(1-item.weight/topics[0].weight)*100}%">{item.term}</span>{#if idx + 1 !== keywordLimit}<span style="color: hsl(0, 0%, {(1-item.weight/topics[0].weight)*100}%">, </span>{/if}
                {/each}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="plus" width="60" height="60" viewBox="0 0 160 160">
            <rect class="vertical-line" x="70" width="15" height="160"/>
            <rect class="horizontal-line" y="70" width="160" height="15"/>
          </svg></button>
        {#if isOpen}
        <div transition:slide={{ duration: 300 }}>
            {#each articles as item, idx}
                <ArticleRow rowData={item} num={idx + 1} hasBottomBar={idx + 1 !== articles.length}/>
            {/each}
        </div>
        {/if}
        <hr/>

    </div>
</main>

<style>
    .topic-section-header {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: 600;
    }

    .topic-section-top-topics {
        color: #D2CFC9;
        flex-grow: 9;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    button {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        color: inherit;
        cursor: pointer;
        margin: 0;
        padding-bottom: 0.5em;
        padding-top: 0.5em;
        width: 100%;
        position: relative;
        text-align: left;
    }

    svg {
        transition: transform 0.2s ease-in;
        /* display: inline-block; */
    }

    rect {
        transition: all 0.2s ease-in;
        transform: scaleX(1);
        transform-origin: 50% 50%;
    }

    [aria-expanded=true] svg {
        transform: rotate(90deg);
        }
    
    [aria-expanded=true] .horizontal-line {
        transform: scaleX(0);
    }

    @media screen and (max-width: 900px) {
        .topic-section-header {
            font-size: 60px;
        }

        svg {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 661px) {
        .topic-section-header {
            font-size: 30px;
        }

        svg {
            width: 20px;
            height: 20px;
        }
    }
</style>