<script>
    export let number;
    export let title;
    export let textContent;
</script>

<main>
    <div class="about-section-left">
        <hr/>
        <div class="about-section-left-content">
            <span class="about-section-left-number">{number}-</span>
            <span class="about-section-left-title">{title}</span>
        </div>
    </div>
    <div class="about-section-right">
        <hr/>
        <p>{textContent}</p>
    </div>
</main>

<style>
    main {
        display: flex;
        height: 400px;
    }

    .about-section-left {
        margin-right: 30px;
        width: 60%;
    }

    .about-section-left-content {
        align-items: center;
        display: flex;
    }

    .about-section-left-number {
        font-size: 20px;
        font-family: 'Roboto Mono', monospace;
        margin-right: 50px;
    }

    .about-section-left-title {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        color: white;
        font-weight: bold;
    }

    .about-section-right {
        width: 40%;
    }
</style>