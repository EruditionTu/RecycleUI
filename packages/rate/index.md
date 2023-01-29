---
title: Rate
nav:
  title: Components
  path: /components
group:
  title: Data Entry
---

# Rate 

Rate component.

## When To Use

* Show evaluation.
* A quick rating operation on something.

## Basic

The simplest usage.

<code src='./demo/basic.tsx'/>

## Half star

Support select half star.

<code src='./demo/half.tsx' />


## Show copywriting

Add copywriting in rate components.

<code src='./demo/text.tsx'/>

## Read only

Read only, can't use mouse to interact.

<code src='./demo/readonly.tsx'/>

## Clear star

Support set allow to clear star when click again.

<code src='./demo/allowClear.tsx'/>

## Other Character

Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.

<code src='./demo/other.tsx' />

## Customize character

Can customize each character using `(index:number) => ReactNode`.

<code src='./demo/custom.tsx' />

## API

| Name        | Description      | Type                                       | default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| allowClear        | Whether to allow clear when click again         | `boolean`         | `false` |
| allowHalf    | Whether to allow semi selection         | `boolean`                                  | `false`   |
| count      | Star count   | `number`                   | `5`   |
| defaultValue     | The default value         | `number`                                  | ``   |
| value        | The current value         | `number`   | ``   |
| tooltips | Customize tooltip by each character    | `string[] | string`           | ``   |
| readonly | If read only, unable to interact | `boolean`                   | `false`      |
| character     | The custom character of rate  | `ReactNode | ((index: number) => ReactNode)` | `<StarFilled />`    |
| onChange | 	Callback when select value | `(value: number) => void`        |`` |
| onHoverChange | Callback when hover item  | `(value: number) => void`   | ``  |
| style | The custom style object of rate | `CSSProperties`        |`{}` |
| className | The custom class name of rate  | `string`   | ``  |

