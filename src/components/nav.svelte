<script lang="ts">
    import TopAppBar, {Title, Row, Section} from '@smui/top-app-bar';
	import Button, { Label } from '@smui/button';
    import IconButton from '@smui/icon-button';
    import Menu, { MenuComponentDev } from '@smui/menu';
    import List, { Item, Separator, Text } from '@smui/list';

    let menu: MenuComponentDev;
</script>

<main>
    <TopAppBar
    variant="static"
    color="secondary"
    style="height: 97px; display: flex; justify-content: center;">
    <Row>
        <Section>
            <Title><a id="logo-link" href="/"><span id="logo-name">Nabu</span></a></Title>
        </Section>
        <div id="nav-wide-menu">
            <Section align="end" toolbar>
                <Button href="/latest"><Label><span>Latest</span></Label></Button>
                <Button href="/#about"><Label><span>About</span></Label></Button>
                <Button href="/#support"><Label><span>Support</span></Label></Button>
                <Button href="/#contact"><Label><span>Contact</span></Label></Button>
                <!-- <Button href="/#signup"><Label><span>Sign Up</span></Label></Button> -->
            </Section>
        </div>
        <div id="nav-icon-menu">
            <IconButton class="material-icons" on:click={() => menu.setOpen(true)}>menu</IconButton>
            <Menu bind:this={menu}>
                <List>
                    <Item>
                      <Button href="/latest">Latest</Button>
                    </Item>
                    <Item>
                        <Button href="/#about">About</Button>
                    </Item>
                    <Item>
                        <Button href="/#support">Support</Button>
                    </Item>
                    <Item>
                        <Button href="/#contact">Contact</Button>
                    </Item>
                    <!-- <Item>
                        <Button href="/#signup">Sign Up</Button>
                    </Item> -->
                </List>
            </Menu>
        </div>
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

    #logo-link {
        text-decoration: none;
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

    #nav-wide-menu {
        display: inline-flex;
    }

    #nav-icon-menu {
        display: none;
    }

    @media screen and (max-width: 661px) {
        #nav-wide-menu {
            display: none;
        }

        #nav-icon-menu {
            display: inline-flex;
            align-self: center;
        }
    }
</style>