<script>
    import AboutSection from '../components/aboutSection.svelte';
</script>

<main>
    <div id="about-content">
        <h1 id="about" class="small-header">About Us</h1>
        <AboutSection number="01" title="The Problem" textContent="We live in different realities, shaped by the news we consume. The further apart our realities lie, the more likely we are to polarize. This nurtures distrust, stifles communication, and can lead to conflict. <a href='/blog/the-problem'>More -></a>" />
        <AboutSection number="02" title="Our Goal" textContent="Reduce the difference between our realities as shaped by news consumption. This involves presenting and annotating a diverse array of news in a concise, accessible manner. <a href='/blog/roadmap'>Roadmap -></a>" />
        <AboutSection number="03" title="Our Solution" textContent="Create tools and services to help readers of online news see and understand all types of bias, from spin and slant to bias by omission and placement." />
        <AboutSection number="04" title="Our Name" textContent="Nabu is the Mesopotamian patron god of literacy, rational arts, scribes, and wisdom. His patronage aligns with our goal." />
    </div>
</main>

<style>
    main {
        background-color: #D2CFC9;
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 10px;
    }

    #about-content {
        min-width: 660px;
        max-width: 1300px;
		display: block;
		margin: 0 auto;
    }

    @media screen and (max-width: 661px) {
        #about-content {
            max-width: 600px;
            min-width: 300px;
        }
    }
</style>