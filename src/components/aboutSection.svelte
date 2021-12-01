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
        height: 220px;
    }

    .about-section-left {
        margin-right: 20px;
        width: 470px;
    }

    .about-section-left-content {
        align-items: center;
        display: flex;
    }

    .about-section-left-number {
        font-size: 14px;
        font-family: Lato;
        margin-right: 20px;
    }

    .about-section-left-title {
        font-size: 36px;
        font-family: Unica77 LL;
        color: white;
    }

    .about-section-right {
        width: 310px;
    }
</style>