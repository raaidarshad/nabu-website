<script>
    import TopAppBar, {Title, Row, Section} from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
</script>

<main>
    <TopAppBar
    variant="static"
    color="secondary"
    style="height: 97px; display: flex; justify-content: center;">
    <Row>
        <Section>
            <Title><span id="logo-name">Nabu</span></Title>
        </Section>
        <Section align="end" toolbar>
            <Button href="#latest"><Label><span>Latest</span></Label></Button>
            <Button href="#about"><Label><span>About</span></Label></Button>
            <Button href="#support"><Label><span>Support</span></Label></Button>
            <Button href="#contact"><Label><span>Contact</span></Label></Button>
            <Button href="#signup"><Label><span>Sign Up</span></Label></Button>
        </Section>
    </Row>
    </TopAppBar>
</main>

<style>
    #logo-name {
        font-family: 'Alegreya', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 48px;
        line-height: 55px;
        color: #4F4F4F;

    }

    span {
        font-family: 'Catamaran', sans-serif;
        letter-spacing: -0.02em;
        font-size: 20px;
        line-height: 25px;
        font-style: normal;
        font-weight: normal;
        color: black;
    }
</style>