---
title: SvelteUIProvider
description: The SvelteUIProvider is the central part of your app.
docs: 'theming/svelteui-provider.md'
---

<script>
    import { Heading, Preview } from 'components'
    import { Prism } from "@svelteuidev/prism";

    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:15rem!important;}@media(max-width: 800px){.article>*:nth-child(3){margin-top:18rem!important;}}<\/style>`;

    const step1 = `
    `
</script>

<svelte:head>
{@html styles}
</svelte:head>

<Heading />

# Getting Started

For SvelteUI to work properly, you need to set up the SvelteUIProvider at the top level of your application.

**For Svelte projects -> `App.svelte`**

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<YourApp />
</SvelteUIProvider>
```

**For SvelteKit projects -> `__layout.svelte`**

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<YourApp />
</SvelteUIProvider>
```

## NormalizeCSS and global styles

SvelteUIProvider includes a NormalizeCSS style sheet and some extra global styles added to body element:

- `background-color` to theme.colors["dark700"].value in dark color scheme and white in light
- `color` to theme.colors["dark50"].value in dark color scheme and black in light
- `font-family` and `font-size` based on theme

To enable these global styles, set withNormalizeCSS and withGlobalStyles props:

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<YourApp />
</SvelteUIProvider>
```

You can change the base `background-color` and `color` through the config prop:

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
	import type { SvelteUIProviderConfig } from '@svelteuidev/core'; // <-- If using typescript you can import the config type

	config = {
		light: { bg: 'White', color: 'Black' },
		dark: { bg: '#1A1B1E', color: '#C1C2C5' }
	};
</script>

<SvelteUIProvider {config} withNormalizeCSS withGlobalStyles>
	<YourApp />
</SvelteUIProvider>
```

> Note that extending or overriding the default theme will come later, this config only handles global styles defined above.

## Component concepts

SvelteUIProvider can accept actions, classes, element bindings, and style overrides just like any other component

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
	import { pageleave } from '@svelteuidev/actions';

    let element
    console.log({ element })
</script>

<SvelteUIProvider
    bind:element
    use={[[pageleave, () => console.log('page left')]]}
    class='animate-bounce' // <-- `tailwind class`
    override={{mt: '$4'}} // <-- `using style utilities and theme tokens`
>
	<YourApp />
</SvelteUIProvider>
```

For information server side rendering and color scheme changes refer to [Server Side Rendering](theming/ssr), [Dark Theme](theming/dark-theme)
