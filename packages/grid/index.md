---
title: Grid
nav:
  title: Components
  path: /components
group:
  title: Layout
---

# Grid 

24 Grids System.

## Outline

In the grid system, we define the frame outside the information area based on `row` and `column`, to ensure that every area can have stable arrangement.

Following is a brief look at how it works:

* Establish a set of `column` in the horizontal space defined by `row` (abbreviated `col`).
* Your content elements should be placed directly in the `col`, and only `col` should be placed directly in `row`.
* The column grid system is a value of 1-24 to represent its range spans. For example, three columns of equal width can be created by `<Col span={8} />`.
* If the sum of `col` spans in a `row` are more than 24, then the overflowing col as a whole will start a new line arrangement.

Our grid systems base on Flex layout to allow the elements within the parent to be aligned horizontally - left, center, right, wide arrangement, and decentralized arrangement. The Grid system also supports vertical alignment - top aligned, vertically centered, bottom-aligned. You can also define the order of elements by using order.

Layout uses a 24 grid layout to define the width of each "box", but does not rigidly adhere to the grid layout.

## Basic Grid

From the stack to the horizontal arrangement.

You can create a basic grid system by using a single set of `Row` and `Col` grid assembly, all of the columns (`Col`) must be placed in `Row`.

<code src='./demo/basic.tsx'/>

## Grid Gutter

You can use the gutter property of Row as grid spacing, we recommend set it to `(16 + 8n) px` (n stands for natural number).

You can set it to a object like `{ xs: 8, sm: 16, md: 24, lg: 32 }` for responsive design.

You can use an array to set vertical spacing, [horizontal, vertical] `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`.

<code src='./demo/blockDivider.tsx'/>

## Column offset

Column offset

`offset` can set the column to the right side. For example, using `offset = {4}` can set the element shifted to the right four columns width.

<code src='./demo/offset.tsx'/>


## Grid sort

Grid sort.

By using `push` and `pull` class you can easily change column order.

<code src='./demo/gridSort.tsx'/>

## Typesetting

Child elements depending on the value of the `start`, `center`, `end`, `space-between`, `space-around` and `space-evenly`, which are defined in its parent node typesetting mode.。

<code src='./demo/typesetting.tsx'/>

## Alignment

Child elements vertically aligned.

<code src='./demo/alignment.tsx'/>

## Order

To change the element sort by `order`.

<code src='./demo/sort.tsx' />

## Flex Stretch

`Col` provides `flex` prop to support fill rest.

<code src='./demo/flex.tsx'/>

## Responsive

Here preset six dimensions: xs sm md lg xl xxl.

<code src='./demo/meida.tsx'/>

## More responsive

`span` `pull` `push` `offset` `order` property can be embedded into `xs` `sm` `md` `lg` `xl` `xxl` properties to use, where `xs={6}` is equivalent to `xs={{span: 6}}`.

<code src='./demo/other.tsx'/>

## Playground

A simple playground for column count and gutter.

<code src="./demo/gridConfig.tsx"/>

## API

### Row API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| align        | 	Vertical alignment         | `top \| middle \| bottom \| stretch \| {[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'top' \| 'middle' \| 'bottom' \| 'stretch'}`         | `top` |
| gutter    | Spacing between grids, could be a number or a object like `{ xs: 8, sm: 16, md: 24}`. Or you can use array to make horizontal and vertical spacing work at the same time `[horizontal, vertical]` | `number \| object \| array`  | `0`   |
| justify      | Horizontal arrangement | `start \| end \| center \| space-around \| space-between \| space-evenly \| {[key in 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl']: 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'}`    | `start`   |
| wrap     | 	Auto wrap line  | `boolean`     | `true`   |

### Col API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| flex        | 	Flex layout style        | `string|number ` | `default` |
| offset    | The number of cells to offset Col from the left         | `number`   | `0`   |
| order      | Raster order | `number`                   | `0`   |
| pull    | 	The number of cells that raster is moved to the left        | `number`     | `0`   |
| push        | 	The number of cells that raster is moved to the right         | `number`   | `0`   |
| span | Raster number of cells to occupy, 0 corresponds to `display: none`   | `number` | `0`   |
| xs |`screen < 576px` and also default setting, could be a `span` value or an object containing above props | `string\|object` | `--`      |
| sm     | 	`screen ≥ 576px`, could be a `span` value or an object containing above props | `string\|object` | `--`    |
| md    | `screen ≥ 768px`, could be a `span` value or an object containing above props | `string\|object` | `--`    |
| lg     |`screen ≥ 992px`, could be a `span` value or an object containing above props  | `string\|object` | `--`    |
| xl     |`screen ≥ 1200px`, could be a `span` value or an object containing above props  | `string\|object` | `--`    |
| xxl     |`screen ≥ 1600px`, could be a `span` value or an object containing above props  | `string\|object` | `--`    |