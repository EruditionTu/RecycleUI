---
title: Button
nav:
  title: Components
  path: /components
group:
  title: Common
---

# Button

The button is used to start an instant operation.

## Button Type
The most basic buttons have four types.
* Main Button: used for the main moving point. One operation area can only have one main button. The main button is generally solid.
* Secondary button: it is used for a group of action points without primary and secondary points. The secondary button is generally empty.
* Text button: used for the secondary action point. It is a text description without a border background.
* Link button: generally used for linking, that is, navigating to a location. It is a colored text link without a border background.
  <code src="./demo/type.tsx"></code>

## Buttons for different scenes
If the button is the main button solid or the secondary button transparent, there will be four kinds of buttons in the scene.
* routine：A button in the most common scenario
* info：It is generally applicable to clicking the button in a certain information scenario
* danger：It is generally applicable to clicking a button that will perform some dangerous operation
* warn：It is generally applicable to clicking the button that will cause some impact. The impact can be good or bad, and it is lighter than that of danger
  <code src="./demo/purpose.tsx"></code>

## Loading

loading configure load status button

<code src="./demo/loading.tsx"></code>

## Disabled

disabled configure buttons in the disabled state

<code src="./demo/disabled.tsx"></code>

## Button Shape

The shape of the button can only appear in the button whose type is solid and transparent.

<code src="./demo/shape.tsx"></code>

## Button Icon

The `icon` of the button can be set through the `icon` field.

<code src="./demo/icon.tsx"></code>

## Button Group

Through Button Group Place multiple button groups.

<code src="./demo/group.tsx"></code>

## Button API

| Name        | Describe      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| type        | button type         | `solid / transparent / text / link`         | `solid` |
| disabled    | do not use buttons        | `boolean`                                  | `false`   |
| purpose      | button theme usage（Valid only for `solid` and `transparent` buttons）   | `routine/info/danger/warn`                   | `routine`   |
| loadingProps| Loader properties (refer to the API of the `Loader` component) | `LoaderProps` | `{}`   |
| loading     | leave the button loaded         | `boolean`                                  | `false`   |
| icon        | the icon of button（Valid only for `solid` and `transparent` buttons）         | `ReactNode`                                | `<></>`   |
| shape        | the shape of button（Valid only for `solid` and `transparent` buttons）         | `circle/rect/round`                                | `rect`   |
| onClick | button click callback event | `Function`                                 | `--`      |
| style | the inline style | `CSSProperties`                                         | `--`      |
| className | class | `string`                                         | `--`      |



## Button Group API

⚠ Note: Button types in ButtonGroup only support button `type` with `solid` or `transparent` type and `rect` `shape`. Otherwise, they will be converted to the default `type=soldi, shape=rect`

| Name      | Describe | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| style     | style  | `CSSProperties` | `--`    |
| className | class        | `string`        | `--`    |
