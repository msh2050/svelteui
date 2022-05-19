---
title: Override
description: Overriding base styles.
docs: 'theming/override.md'
---

<script>
    import { Heading, Preview } from 'components'
    import { Button } from "@svelteuidev/core";
    import { GithubLogo } from 'radix-icons-svelte'
    import { Prism } from "@svelteuidev/prism";

    const styles = `<style id='svelteui-inject-body' type='text/css'>.article>*:nth-child(3){margin-top:15rem!important;}@media(max-width: 800px){.article>*:nth-child(3){margin-top:18rem!important;}}<\/style>`;

    const code = `
    <script>
        import { Button } from '@svelteuidev/core'

        const PrimaryButton = {
            '$$blue': '#228be6',
            boxShadow: '0 2px 14px $$blue',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
                boxShadow: '0 4px 20px $$blue',
            },
        };
    <\/script>
    
    <Button override={PrimaryButton}>
        <GithubLogo slot='leftIcon' size={16} /> I love open source!
    <\/Button>
    `

    const PrimaryButton = {
        '$$blue': '#228be6',
        boxShadow: '0 2px 14px $$blue',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            boxShadow: '0 4px 20px $$blue',
        },
    };
</script>

<svelte:head>
{@html styles}
</svelte:head>

<Heading />

# Getting Started

SvelteUI makes it simple to override components default styles. We recommend reading the [Stitches Styling docs](https://stitches.dev/docs/styling) before overriding the SvelteUI component styles. This is because styling with SvelteUI is most similar to styling with vanilla css, or css-preprocessors (scss/sass) but with extra features, and reading that will help you get started.

Remember that all [Stitches](https://stitches.dev) features are available in SvelteUI since it uses stitches as a styling engine.

> Note: The tokens used here like `$$blue`, etc.. are defined in the [default theme](theming/default-theme) section.

## Using the css prop

SvelteUI provides all components the `override` prop for overriding styles easily. It's like the style attribute on normal elements, but it supports tokens, media queries, nesting and token-aware values.

<Preview cols={1} code={code}>
    <Button override={PrimaryButton}>
        <GithubLogo slot='leftIcon' size={16} /> I love open source!
    </Button>
</Preview>

## Overriding styles with the css function

When styling using the [css function](theming/create-styles#styling-with-svelteui), you can also override styles by passing an object to the css property in the function returned from the css function. It may sound confusing at first, but it is much simpler than you may think:

```svelte
<script>
	import { css } from '@svelteuidev/core';

    let condition = false

    const styles = css({
        backgroundColor: 'black',
        color: 'white'
    })
</script>

// the returned function can take an object, and the override happens in the css property
<div class={styles({ css: {color: condition ?  green : red } })}>Some content</div>
```

## Overriding the HTML tag

Various (but not all) components support changing their root elements with the `root` prop:

```svelte
<script>
	import { Box } from '@svelteuidev/core';
</script>

<Box root="p">I was a div but now I'm a paragraph tag!</Box>
```
