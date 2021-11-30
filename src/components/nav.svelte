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
            <Title>Nabu</Title>
        </Section>
        <Section align="end" toolbar>
            <Button href="#latest"><Label>Latest</Label></Button>
            <Button href="#about"><Label>About</Label></Button>
            <Button href="#support"><Label>Support</Label></Button>
            <Button href="#contact"><Label>Contact</Label></Button>
            <Button href="#signup"><Label>Sign Up</Label></Button>
        </Section>
    </Row>
    </TopAppBar>
</main>