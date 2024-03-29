<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text';
    import CharacterCounter from '@smui/textfield/character-counter';
    import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
    import Snackbar, { Actions, SnackbarComponentDev } from '@smui/snackbar';
   
    let contactName = '';
    let contactEmail = '';
    let contactMessage = '';

    $: submitDisabled = !(contactName.length > 0 && contactEmail.length > 0 && contactMessage.length > 0);

    function submitContact() {

        fetch('/submitContact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: contactName, email: contactEmail, message: contactMessage }),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        snackbarWithClose.open();
    }

    let snackbarWithClose: SnackbarComponentDev;

  </script>

<main>
    <div id="contact-section">
        <div id="contact-section-text">
            <div id="contact-section-left">
                <hr/>
                <h1 id="contact">Contact</h1>
            </div>
            <div id="contact-section-right">
                <hr/>
                <p>A member of our team will respond to you as soon as we can. We welcome your thoughts.</p>
            </div>
        </div>
        <div id="contact-inputs">
            <div id="contact-inputs-not-message">
                <div id="name-field">
                    <Textfield
                    variant="outlined"
                    bind:value={contactName}
                    style="background-color: white; width: 100%; font-family: 'Roboto Mono', monospace;"
                    label="Name">
                    <HelperText slot="helper">Enter your name</HelperText>
                </Textfield>
                </div>
                <div id="email-field">
                    <Textfield
                    variant="outlined"
                    bind:value={contactEmail}
                    style="background-color: white; width: 100%; font-family: 'Roboto Mono', monospace;"
                    label="Email">
                        <HelperText slot="helper">Enter your email address</HelperText>
                    </Textfield>
                </div>
            </div>
            <Textfield
            helperLine$style="width: 100%;"
            textarea
            input$maxlength={500}
            style="background-color: white; width: 100%; height: 200px; font-family: 'Roboto Mono', monospace;"
            bind:value={contactMessage}
            label="Message"
          >
            <CharacterCounter slot="internalCounter">0 / 500</CharacterCounter>
            <HelperText slot="helper">Enter your message.</HelperText>
          </Textfield>
        </div>
        <Button on:click={submitContact} disabled={submitDisabled}>
            <Label>Submit</Label>
          </Button>
    </div>
    <Snackbar bind:this={snackbarWithClose}>
        <Label>Message sent.</Label>
        <Actions>
          <IconButton class="material-icons" title="Dismiss">close</IconButton>
        </Actions>
      </Snackbar>
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
        width: 60%;
        margin-right: 30px;
    }

    #contact-section-right {
        width: 40%;
    }

    #contact {
        font-size: 80px;
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        color: black;
        font-weight: bold;
        margin-top: 0;
    }

    #contact-inputs {
        margin-top: 20px;
    }

    #contact-inputs-not-message {
        display: flex;
        margin-bottom: 20px;
    }

    #name-field {
        width: 50%;
        margin-right: 20px;
    }

    #email-field {
        width: 50%;
    }

    p {
        font-size: 30px;
    }

    @media screen and (max-width: 920px) {
        #contact-section-text {
            flex-direction: column;
        }

        #contact-section-left {
            width: 100%;
        }

        #contact-section-right {
            width: 100%;
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
    }
</style>