---
title: Typewriter
group: 'svelteuidev-motion'
packageGroup: '@svelteuidev/motion'
slug: /motion/typewriter/
category: 'transitions'
description: 'Type writer transition effect for text'
import: "import { typewriter } from '@svelteuidev/motion';"
source: 'svelteui-motion/src/lib/dist/transitions/typewriter/typewriter.ts'
docs: 'motion/typewriter.md'
---

<script lang='ts'>
    import { Box, Button } from '@svelteuidev/core';
	import { typewriter } from '@svelteuidev/motion';
    import { Heading, Preview } from 'components';

    let visible = false;
    const toggleVisible = () => {
        visible = !visible;
    };

    const code = `
    <script>
        import { typewriter } from '@svelteuidev/motion';
        import { Button } from '@svelteuidev/core';

        let visible = false;
        const toggleVisible = () => {
            visible = !visible;
        };
    <\/script>

    <div>
        {#if visible}
            <p in:typewriter>Now the transition is playing<\/p>
        {:else}
            <p>Click the button to play the transition<\/p>
        {\/if}
    <\/div>
    <Button on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}<\/Button>
    `
</script>

<Heading />

## Usage

The typewriter transition will give your text a typed effect. Just like every other transition, it is triggered by an element entering or leaving the DOM as a result of a state change. If you attempt to use the typewriter transition on non text nodes, it will result in an error.

<Preview override={{'.grid': {maxW: 300, w: 300}}} cols={1} {code}>
        <div>
            {#if visible}
                <p in:typewriter>Now the transition is playing</p>
            {:else}
                <p>Click the button to play the transition</p>
            {/if}
        </div>
        <Button fullWidth on:click={toggleVisible}>{!visible ? 'Play Transition' : 'Stop Transition'}</Button>
</Preview>

## Params

| Param  | Description                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------- |
| speed  | A decimal number representing the duration of the transition (in seconds)                                |
| easing | An easing function to be applied to the transition. Works with svelte easing and custom easing functions |

## Typescript

You can import `TypewriterParams` interface type from `@svelteuidev/motion`:

```ts
import type { TypewriterParams } from '@svelteuidev/motion';

interface TypewriterParams {
    speed?: number;
    easing?: EasingFunction;
}
```

## Definition

```ts
function typewriter(node: HTMLElement, { speed }: TypewriterParams): TransitionConfig;
```
