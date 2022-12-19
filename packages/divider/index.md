---
title: Divider
nav:
  title: Components
  path: /components
group:
  title: Layout
---

## Divider

A divider line separates different content.

## When To Use

* Divide sections of article.
* Divide inline text and links such as the operation column of table.

## Horizontal

Divider is `horizontal` by default. You can add text within Divider.

<code src='./demo/horizontal.tsx' />

## Vertical

Use `type="vertical"` make it vertical.

<code src='./demo/vertical.tsx' />

## Divider with title

Divider with inner title, set `align="left/right"` to align it.

<code src='./demo/withText.tsx' />

## API

| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| children        | 	The wrapped title         | `ReactNode`         | `<></>` |
| className    | The className of container         | `string`                                  | ``   |
| dashed	      | Whether line is dashed   | `boolean`                   | `false`   |
| align     | The position of title inside divider	         | `left | right | center`          | `center`   |
| orientationMargin        | The margin-left/right between the title and its closest border, while the `align` must be `left` or `right`       | `number` | ``   |
| style | The style object of container | `CSSProperties`                                 | `{}`      |
| type     | The direction type of divider  | `horizontal | vertical` | `horizontal`    |