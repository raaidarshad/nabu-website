<script>
    import { goto } from "$app/navigation";
    import { page } from '$app/stores';

    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';

    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';
    import ArticleRow from "../components/articleRow.svelte";

    let targetUrl = $page.query.get('url') ? $page.query.get('url') : '';
    let searchUrl = targetUrl;

    function updateUrl() {
      searchUrl = targetUrl;
      goto(`?url=${targetUrl}`, {keepfocus:true, replaceState:true, noscroll:true});
    }

    async function getSimilarArticles(inputUrl) {
      // change to a POST so you can put the url in the request body
      const similarArticles = await (
        await fetch(`/submitSearch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ target: inputUrl }),
        })
        );
      return similarArticles.json();
    }

  </script>
  
  <main>
    <Nav />
    <h1>Similar Articles</h1>
    <div id="search-field">
      <Textfield bind:value={targetUrl} label="article url" on:change={updateUrl} style="width: 100%;" helperLine$style="width: 100%;">
        <HelperText slot="helper">Enter a link to an article</HelperText>
      </Textfield>
  </div>
    {#if searchUrl.length > 7}
    <!-- hit endpoint. if no match, say so. if yes match, present results. -->
    <div id="search-results">
      {#await getSimilarArticles(searchUrl)}
        <p>waiting for results...</p>
      {:then articles}
        <p>Here are the results.</p>
        {#each articles.rows as item, idx}
          <ArticleRow rowData={item} num={idx + 1} hasBottomBar={idx + 1 !== articles.rows.length}/>
        {/each}
      {/await}
    </div>
    {/if}
    <Footer />
  </main>

  <style>
    main {
      min-width: 900px;
      max-width: 1300px;
		  display: block;
		  margin: 0 auto;
      padding-left: 10px;
      padding-right: 10px;
    }

    h1 {
      font-size: 80px;
      font-family: 'Catamaran', sans-serif;
      letter-spacing: -0.02em;
      font-weight: 600;
      text-align: center;
      margin-bottom: 0;
    }

    #search-field {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    @media screen and (max-width: 900px) {
      main {
        max-width: 900px;
        min-width: 300px;
      }

      h1 {
        font-size: 60px;
      }
    }

    @media screen and (max-width: 661px) {
      h1 {
        font-size: 36px;
      }
    }
  </style>