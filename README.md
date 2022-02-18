# Nabu Website
This is the code for the [Nabu website](https://www.nabu.news). The project has CI/CD setup with Vercel. Made with Svelte.

The browser extension can be found [here](https://github.com/raaidarshad/nabu-browser-extension), and the data processing can be found [here](https://github.com/raaidarshad/nabu-core).

### Helpful links
- [Vercel](https://vercel.com/dashboard) (GitHub login)
- [CloudFlare](https://dash.cloudflare.com) (email login)
- [Plausible Analytics](https://plausible.io/nabu.news) (email login)


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
