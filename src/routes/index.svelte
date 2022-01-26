<script>
	import Nav from '../components/nav.svelte';
	import Hero from '../components/hero.svelte';
	import Latest from '../components/latest.svelte';
	import About from '../components/about.svelte';
	import Support from '../components/support.svelte';
	import Contact from '../components/contactSimple.svelte';
	import Footer from '../components/footer.svelte';

	document.title = "Nabu"
</script>

<main>
	<Nav/>
	<Hero/>
	<Latest/>
	<About/>
	<Support/>
	<Contact/>
	<Footer/>
</main>

<style>
</style>