<script>
    import AboutSection from '../components/aboutSection.svelte';
</script>

<main>
    <h1 id="about" class="section-header">About Us</h1>
    <div id="about-content">
        <AboutSection number="01" title="The Problem" textContent="We live in different realities, shaped by the news we consume. The further apart our realities lie, the more likely we are to polarize. This nurtures distrust, stifles communication, and can lead to conflict." />
        <AboutSection number="02" title="Our Goal" textContent="Reduce the difference between our realities as shaped by news consumption. This involves presenting and annotating a diverse array of news in a concise, accessible manner." />
        <AboutSection number="03" title="Our Solution" textContent="Create tools and services to help readers of online news see and understand all types of bias, from spin and slant to bias by omission and placement." />
        <AboutSection number="04" title="Our Name" textContent="Nabu is the Mesopotamian patron god of literacy, rational arts, scribes, and wisdom. His symbol was the cuneiform wedge, which we have adapted as our logo. His patronage aligns with our goal." />
    </div>
</main>

<style>
    main {
        width: 800px;
    }
</style>