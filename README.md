# Nabu Website
This is the code for the Nabu website. The project has CI/CD setup with Vercel. Made with Svelte.

[Website](https://www.nabu.news)
[Website code repository](https://github.com/raaidarshad/nabu-website)
[Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/nabu/)
[Chrome Extension](https://chrome.google.com/webstore/detail/nabu/bgmcmbjhfdnfaplfiiphlefclhhhnajb)
[Data processing/core code repository](https://github.com/raaidarshad/nabu-core)


### Helpful links
- [Vercel](https://vercel.com/dashboard)
- [CloudFlare](https://dash.cloudflare.com)
- [Plausible Analytics](https://plausible.io/nabu.news)

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

## Blog

Any new blog posts go in the src/routes/blog directory as `*.md` files. Make sure to include the frontmatter for any post. The easiest way is to copy-paste, then rename and update, the `first.md` file. I don't intend to blog super often, but this is a very easy way to add new simple pages that can have extended functionality with Svelte components.