<main>
    <div id="my-hero">
        <div id="hero-main-text">
            <h1>The latest news from every angle.</h1>
        </div>
        <div id="hero-sub-text">
            <p>See how a story is covered by every outlet, all in one place. Get the browser extension now.</p>
            <a id='firefox-cta' href='https://addons.mozilla.org/en-US/firefox/addon/nabu/'><p><img src="/ff-logo.png" alt="Firefox extension">Firefox</p></a>
            <a id='firefox-cta' href='https://chrome.google.com/webstore/detail/nabu/bgmcmbjhfdnfaplfiiphlefclhhhnajb'><p><img src="/chrome-logo.png" alt="Chrome extension">Chrome</p></a>
        </div>
    
        <div id="hero-rect-1"/>
        <div id="hero-rect-2"/>
        <div id="hero-tri-1"/>
        <div id="hero-tri-2"/>
    </div>
</main>

<style>
    main {
        height: 837px;
        background-color: #E7E2DE;
        position: relative;
        overflow: hidden;
    }

    img {
        width: auto;
        max-height: 40px;
        vertical-align: middle;
    }

    #firefox-cta {
        padding: 0 12px;
        background: #000;
        color: #fff;
        font-weight: 500;
        line-height: 1;
        font-size: 15px;
        text-align: center;
        border-radius: 7px;
        display: inline-block;
        align-items: center;
        justify-content: center;
        border: 1px solid #000;
        text-decoration: none !important;
        line-height: 1;
    }

    #firefox-cta p {
        line-height: 0;
        font-size: 25px;
    }

    #my-hero {
        position: relative;
        max-width: 1440px;
        height: 100%;
        margin: 0 auto;
    }

    #hero-main-text {
        max-width: 905px;
        min-width: 600px;
        margin-left: 49px;
        position: relative;
        z-index: 2;
    }

    #hero-sub-text {
        width: 530px;
        margin-left: 49px;
        margin-top: 220px;
        position: relative;
        z-index: 2;
    }

    h1 {
        font-size: 120px;
        line-height: 120px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: bold;
    }

    #hero-rect-1 {
        position: absolute;
        background-color: #FF6719;
        width: 670px;
        height: 590px;
        top: 247px;
        left: 500px;
    }

    #hero-rect-2 {
        position: absolute;
        background-color: #FF6719;
        width: 650px;
        height: 500px;
        bottom: 220px;
        left: 815px;
    }

    #hero-tri-1 {
        width: 0;
        height: 0;
        top: 117px;
        left: 500px;
        border-bottom: 130px solid #FF6719;
        border-left: 315px solid transparent;
        position: absolute;
    }

    #hero-tri-2 {
        position: absolute;
        width: 0;
        height: 0;
        border-top: 140px solid #FF6719;
        border-right: 295px solid transparent;
        bottom: 80px;
        left: 1170px;
    }

    @media screen and (max-width: 936px) {
        #hero-sub-text {
            margin-top: 100px;
        }
    }

    @media screen and (max-width: 815px) {
        #hero-rect-1 {
            left: 61%;
            top: 147px;
        }

        #hero-tri-1 {
            left: 61%;
            top: 17px;
        }
    }

    @media screen and (max-width: 661px) {
        #hero-main-text {
            max-width: 400px;
            min-width: 200px;
            margin-left: 20px;
        }

        h1 {
        font-size: 60px;
        line-height: 60px;
        }

        #hero-sub-text {
            width: 300px;
            margin-top: 160px;
            margin-left: 20px;
        }

        #hero-rect-1 {
            left: 50%;
            top: 147px;
        }

        #hero-tri-1 {
            left: 50%;
            top: 17px;
        }

        main {
            height: 600px;
        }

        #firefox-cta p {
        font-size: 20px;
    }
    }

</style>