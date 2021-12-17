<script>
	import Nav from '../components/nav.svelte';
    import Latest from '../components/latest.svelte';
	import Footer from '../components/footer.svelte';

	document.title = "Nabu | Latest"
</script>

<main>
	<Nav/>
    <Latest isSection={false} topicLimit={10} />
	<Footer/>
</main>

<style>
</style>