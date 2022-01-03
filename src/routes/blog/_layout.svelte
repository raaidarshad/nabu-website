<script>
    import Nav from '../../components/nav.svelte';
    import Footer from '../../components/footer.svelte';

    export let title;
    export let author;
    export let date;

    document.title = `Nabu - ${title}`
</script>

<main>
    <Nav />
    <div class="blog-post">
        <h1>{title}</h1>
        <h3 class="blog-subtitle">By {author} on {date}</h3>
        <slot></slot>
    </div>
    <Footer />
</main>

<style>
    .blog-post {
        width: 80%;
        margin: 50px auto;
    }

    .blog-subtitle {
        font-size: 20px;
	    font-family: 'Roboto Mono', monospace;
        margin-bottom: 80px;
        font-weight: normal;
    }

    @media screen and (max-width: 661px) {
        .blog-subtitle {
            font-size: 16px;
        }
    }
</style>