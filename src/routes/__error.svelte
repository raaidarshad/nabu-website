<script>
    import Nav from '../components/nav.svelte';
    import Footer from '../components/footer.svelte';

    document.title = `Nabu - Nonexistent Page`
</script>

<main>
    <Nav />
    <div class="error-page">
        <h1>Oh no!</h1>
        The page you're trying to get to doesn't exist (a 404 status code).
    </div>
    <Footer />
</main>

<style>
    .error-page {
        width: 80%;
        max-width: 960px;
        margin: 50px auto;
    }
</style>