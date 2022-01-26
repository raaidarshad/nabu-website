<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import CharacterCounter from '@smui/textfield/character-counter';
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
  </script>

<main>
    <div id="contact-section">
        <div id="contact-section-text">
            <div id="contact-section-left">
                <hr/>
                <h1 id="contact">Contact</h1>
                <hr/>
                <p>Thoughts?</p>
                <p>Questions?</p>
                <p>Just want to say hi?</p>
                <p><a href="mailto:hello@nabu.news">Email us!</a> A member of our team will respond to you as soon as we can.</p>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        background-color: #E7E2DE80;
        height: 700px;
        padding-top: 40px;
        padding-left: 10px;
        padding-right: 10px;
    }

    #contact-section {
        min-width: 300px;
        max-width: 1300px;
        display: block;
        margin: 0 auto;
    }

    #contact-section-text {
        display: flex;
        margin-top: 30px;
    }

    #contact-section-left {
        width: 100%;
        margin-right: 30px;
    }

    #contact {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        color: black;
        font-weight: bold;
        margin-top: 0;
    }

    p {
        font-size: 30px;
    }

    @media screen and (max-width: 920px) {
        #contact-section-text {
            flex-direction: column;
        }

        main {
            height: 800px;
        }
    }

    @media screen and (max-width: 661px) {
        #contact {
            font-size: 50px;
            margin-bottom: 20px;
        }

        p {
            font-size: 20px;
        }

        main {
            height: 500px;
        }
    }
</style>