<script>
    import TopAppBar, {Title, Row, Section} from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
</script>

<main>
    <TopAppBar
    variant="static"
    color="primary">
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
        font-family: GT Alpina;
        font-style: normal;
        font-weight: normal;
        font-size: 32px;
    }

    span {
        font-family: Unica77 LL;
        font-style: normal;
        font-weight: normal;
    }
</style>