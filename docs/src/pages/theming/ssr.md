---
title: Server side rendering
description: How to use SvelteUI in a ssr environment.
docs: 'theming/ssr.md'
---

<script>
    import { Heading, Preview } from 'components'
    import { SvelteUIProvider } from "@svelteuidev/core";
    import { Prism } from "@svelteuidev/prism";

    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:15rem!important;}@media(max-width: 800px){.article>*:nth-child(3){margin-top:18rem!important;}}<\/style>`;

    const step1 = `
    <script>
        import { SvelteUIProvider } from '@svelteuidev/core';
    <\/script>

    <SvelteUIProvider>
        <slot />
    <\/SvelteUIProvider>
    `
    const step2 = `
    <script>
        import { SvelteUIProvider } from '@svelteuidev/core';
    <\/script>

    <SvelteUIProvider ssr>
        <slot />
    <\/SvelteUIProvider>
    `
</script>

<svelte:head>
{@html styles}
</svelte:head>

<Heading />

## Getting Started

You don't need to install any additional tooling to get access to server side rendering. SvelteUI works out of the box without server side rendering capabilities, adding ssr on top of that just makes things that much better! This is something that separates SvelteUI from other libraries, as they require configuration just to start working with SvelteKit.

## 1.

In your top level `__layout.svelte` file, wrap your app in the SvelteUIProvider component:

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider>
	<slot />
</SvelteUIProvider>
```

## 2.

Once you've wrapped your application in the provider, all you need to do is add the `ssr` prop to it and boom. The `ssr` prop will give you all the CSS you need to server-side render your styles:

```svelte
<script>
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider ssr>
	<slot />
</SvelteUIProvider>
```
