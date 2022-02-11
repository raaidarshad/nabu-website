<main>
    <div id="support-section">
        <hr id="support-top-hr"/>
        <h1 id="support">Support Us</h1>
        <div id="support-content">
            <div id="support-content-left">
                <hr/>
                <p>Any support first goes towards the technology: This website, the data processing and machine learning pipelines, the corresponding databases, etc. This varies as tools and features are added/removed. Anything after that funds further development.</p>
            </div>
            <div id="support-content-right">
                <hr id="support-content-right-hr"/>
                <p>This is currently and independent, one-person passion-project. I would love to work on this full time if I can get enough support. Beyond that, additional funding would simply mean more people to work on this. <a href="https://www.google.com">You can support this project here.</a></p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        height: 700px;
        padding-top: 40px;
        background-color: #95BF47;
        padding-left: 10px;
        padding-right: 10px;
    }

    #support-section {
        min-width: 660px;
        max-width: 1300px;
        display: block;
        margin: 0 auto;
    }

    #support-top-hr {
        margin-bottom: 20px;
        margin-top: 40px;
    }

    #support {
        font-size: 80px;
	    font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-weight: bold;
        color: white;
        margin-top: 0;
    }

    #support-content {
        display: flex;
    }

    #support-content-left {
        margin-right: 30px;
        width: 50%;
    }

    #support-content-right {
        width: 50%;
    }
    
    @media screen and (max-width: 920px) {
        #support-content {
            flex-direction: column;
        }

        #support-content-left {
            width: 100%;
        }

        #support-content-right {
            width: 100%;
        }

        #support-content-right-hr {
            display: none;
        }

        main {
            height: 900px;
        }
    }

    @media screen and (max-width: 661px) {
        main {
            height: 800px;
        }

        #support-section {
            max-width: 600px;
            min-width: 300px;
        }

        #support {
            font-size: 50px;
            margin-bottom: 20px;
        }
    }
</style>