---
title: Tag
nav:
  title: Components
  path: /components
group:
  title: Common
---

# Tag

Tag for categorizing or markup.

## When To Use

* It can be used to tag by dimension or property.
* When categorizing.

## Basic

Usage of basic Tag, and it could be `closable` by set `closable` property. Closable `Tag` supports `onClose` events.

<code src='./demo/basic.tsx'/>

## Colorful Tag

We preset a series of colorful tag styles for use in different situations. 

You can also set it to a hex color string for custom color.

（Not really😂，The preset style will be supplemented as a feature. The style of control labels mainly depends on the color field and effect field😈）

<code src='./demo/color.tsx'/>

## Icon Tag

`Tag` components can contain an `Icon`. This is done by setting the `icon` property or placing an `Icon` component within the `Tag`.

If you want specific control over the positioning and placement of the `Icon`, then that should be done by placing the `Icon` component within the `Tag` rather than using the `icon` property.

<code src='./demo/icon.tsx'/>

## Checkable Tag

`CheckableTag` works like Checkbox, click it to toggle checked state.

<code src='./demo/checkable.tsx'/>

## Tag API

| Name      | Description      | Type                                       | Default  |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | The style class of tag tag         | `string`         | `` |
| style    | The style of tag tag         | `CSSProperties`               | `{}`   |
| closable        | Whether tag can be closed         | `boolean`         | `false` |
| disabled    | Whether tag is available         | `boolean`               | `true`   |
| icon	      | Icon icon of tag   | `ReactNode`                   | `<></>`   |
| closeIcon     | Close icon of tag (only useful when closeable is true)         | `ReactNode`          | `<></>`|
| color        | The color of the tag can control the style of the tag with effect      | `string` | `--`   |
| visible | Control whether the tag is visible | `boolean`   | `true`      |
| title     | Text node displayed in tag tag  | `ReactNode` | `--`    |
| size     | Tag size  | `small|default|large` | `default`    |
| effect     | Tag mode, dark or light  | `light|dark` | `light`    |
| onClose     | Callback function when tag tag is closed (only useful when closeable is true)  | `(event: MouseEvent<HTMLElement>) => void` | `--`    |

## CheckableTag API

| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| size       | Size of Checkable Tag  |       `small|default|large`       |    `default`    |
| checked    | Whether the current label is selected     |   `boolean`     | `false`   |
| onChange   | Callback of optional tag selection status change | `(checked: boolean) => void`  | ``   |
| className        | Style class for optional labels         | `string`         | `` |
| style    | Style of Checkable Tag         | `CSSProperties`               | `{}`|