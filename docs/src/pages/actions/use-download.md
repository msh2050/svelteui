---
title: 'use-download'
group: 'svelteuidev-actions'
packageGroup: '@svelteuidev/actions'
slug: /actions/use-download/
description: 'Causes a download to occur with a given Blob object'
import: "import { download } from '@svelteuidev/actions';"
docs: 'actions/use-download.md'
source: 'svelteui-actions/src/lib/dist/use-download/use-download.ts'
---

<script>
    import { Button, Text } from '@svelteuidev/core';
	import { download } from '@svelteuidev/actions';
    import { Heading, Preview } from 'components'
    import { fade } from 'svelte/transition'

    const file = new Blob([])
    let downloaded = false

    const code = `
    <script>
        import { Button } from '@svelteuidev/core';
        import { download } from '@svelteuidev/actions';

        const file = new Blob([])
    <\/script>

    <Button 
        variant='outline'
        use={[[download, { blob: file, filename: "test.txt" }]]}
        on:usedownload={() => console.log('File Downloaded')}
    >
        Download File
    <\/Button>
    `;
</script>

<Heading />

## Usage

> use-download is currently bugged 

With the `use-download` action, a download will occur with a given Blob object as a file with the given filename. It takes an argument of options, which is an object that has two properties. The blob option is a file-like object of immutable, raw data. The filename option is the filename that will be given to the Blob.

<Preview cols={1} {code}>
    <Button 
        variant='outline'
        use={[[download, { blob: file, filename: "test.txt" }]]}
        on:usedownload={() => downloaded = true}
    >
        Download File
    </Button>
    {#if downloaded}
        <span transition:fade>
            <Text>File downloaded!</Text>
        </span>
    {/if}
</Preview>

## Params

| Param    | Description                                      |
| -------- | ------------------------------------------------ |
| blob     | The Blob object representing immutable, raw data |
| filename | The name of the file to be downloaded            |

## Events

The `use-download` action dispatches custom events. Each custom event takes a callback function just like other events *e.g.* `on:click=`

```ts
on:usedownload?: (callback: (any) => unknown) => void;
on:usedownload-error?: (callback: (any) => unknown) => void;
```

## Definition

```ts
export function download(node: HTMLElement, params: { blob: Blob; filename: string }): ReturnType<Action>;
```