---
title: 'use-browser-context'
group: 'svelteuidev-composables'
packageGroup: '@svelteuidev/composables'
slug: /composables/use-browser-context/
description: 'Get access to the reactive browser location API.'
import: "import { useBrowserContext } from '@svelteuidev/composables';"
docs: 'composables/use-browser-context.md'
source: 'svelteui-composables/src/lib/dist/use-browser-context/use-browser-context.ts'
---

<script lang='ts'>
    import { Demo, ComposableDemos } from "@svelteuidev/demos";
    import { Heading } from 'components'
</script>

<Heading />

## Usage

If you are using SvelteKit, then you'll want to use the page store rather than this in most cases.

<Demo demo={ComposableDemos.useBrowserContextDemo.usage} />

## Definition

```ts
export function useBrowserContext(): Writable<BrowserContextState>;
```
