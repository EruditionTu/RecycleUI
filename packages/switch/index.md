---
title: Switch
nav:
  title: Components
  path: /components
group:
  title: Data Entry
---

# Switch

Switching Selector.

## When To Use

* If you need to represent the switching between two states or on-off state.
* The difference between `Switch` and `Checkbox` is that `Switch` will trigger a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with submit operation

## Basic

The most basic usage.

<code src='./demo/basic.tsx'/>

## Disabled

Disabled state of Switch.

<code src='./demo/disabled.tsx' />

## Text & Icon

With text and icon.

<code src='./demo/textAndIcon.tsx' />

## Size

`Size="small"` means small switch, `size="large"` means large switch, `size="default"` means medium size by default.

<code src='./demo/size.tsx'/>

## Loading

Mark a pending state of switch.

<code src='./demo/loader.tsx' />

## API

| Name      | Description     | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | Style class of switch label         | `string`         | `--` |
| style    | The style of the switch label         | `CSSProperties`               | `{}`   |
| label        |    Text description of switch     | `ReactNode`         | `--` |
| size    |     Switch size control     | `large|default|small`               | `default`   |
| checked	      |  Specify whether it is currently selected  | `boolean`                   | `false`   |
| defaultChecked     |   Initially selected      | `boolean`          | `false`|
| disabled        |     Disable   | `boolean` | `false`   |
| checkedChildren | Content when selected | `ReactNode`   | `--`      |
| unCheckedChildren    | Content when unselected  | `ReactNode` | `--`    |
| loading     | Switches in Load  | `boolean` | `false`    |
| onClick     | Callback function when clicking | `(checked?: boolean, event?: MouseEvent<HTMLElement>) => void` | `--`    |
| onChange     |  Callback function when changing | `(checked?: boolean) => void` | `--`    |
