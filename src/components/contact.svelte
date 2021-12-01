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
                    style="background-color: white; width: 100%; height: 115px;"
                    label="Name">
                    <HelperText slot="helper">Enter your name</HelperText>
                </Textfield>
                </div>
                <div id="email-field">
                    <Textfield
                    variant="outlined"
                    bind:value={contactEmail}
                    style="background-color: white; width: 100%; height: 115px;"
                    label="Email">
                        <HelperText slot="helper">Enter your email address</HelperText>
                    </Textfield>
                </div>
            </div>
            <Textfield
            helperLine$style="width: 100%;"
            textarea
            input$maxlength={500}
            style="background-color: white; width: 100%; height: 270px;"
            bind:value={contactMessage}
            label="Message"
          >
            <CharacterCounter slot="internalCounter">0 / 500</CharacterCounter>
            <HelperText slot="helper">Helper Text</HelperText>
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
        height: 80vh;
        padding-top: 40px;
    }

    #contact-section {
        min-width: 800px;
        max-width: 90vw;
        display: block;
        margin: 0 auto;
    }

    #contact-section-text {
        display: flex;
    }

    #contact-section-left {
        width: 60%;
        margin-right: 20px;
    }

    #contact-section-right {
        width: 40%;
    }

    #contact {
        font-size: 80px;
        font-family: Unica77 LL;
        color: black;
        font-weight: bold;
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
</style>