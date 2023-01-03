---
title: Radio
nav:
  title: Components
  path: /components
group:
  title: Data Entry
---


# Radio

Radio.

## When To Use

* Used to select a single state from multiple options.
* The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## Basic

The simplest use.

<code src='./demo/basic.tsx'/>

## Disabled

Radio unavailable.

<code src='./demo/disabled.tsx'/>

# Radio Group

A group of radio components.

<code src='./demo/radioGroup.tsx'/>

## Radio.Group group - optional

Render radios by configuring `options`. Radio type can also be set through the `optionType` parameter.

<code src='./demo/radioGroupOption.tsx'/>

## Radio style

The combination of radio button style.

<code src='./demo/radioButtonStyle.tsx'/>

## Radio.Group with name

Passing the `name` property to all `input[type="radio"]` that are in the same Radio.Group. It is usually used to let the browser see your Radio.Group as a real "group" and keep the default behavior. For example, using left/right keyboard arrow to change your selection that in the same Radio.Group.

<code src='./demo/radioWithName.tsx' />

## Size

There are three sizes available: large, medium, and small. It can coordinate with input box.

<code src='./demo/radioSize.tsx' />

## Solid radio button

Solid radio button style.

<code src='./demo/radioButtonOutline.tsx'/>

## Radio API

| Name        | Description      | Type        | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| onCheckChange        | Callback when the radio selection status changes    | `(nextChecked: boolean) => void`         | `` |
| size    | Size of Radio         | `small、default、large`                                  | `default`   |
| checked      | Whether the current radio is selected   | `boolean`                   | `false`   |
| defaultChecked     |  Initial selection state of the current radio    | `boolean`                                  | `false`   |
| value        |  Value of Radio    | `any`   | ``   |
| className | ClassName of Radio    | `string`           | ``   |
| style | Radio style | `CSSProperties`                   | `{}`      |

## Radio.Button API

| Name        | Description      | Type        | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| onCheckChange        |   Callback when the radio selection status changes       | `(nextChecked: boolean) => void`         | `` |
| size    | Size of Radio         | `small、default、large`                                  | `default`   |
| checked      |  Whether the current radio is selected  | `boolean`                   | `false`   |
| defaultChecked     |   Initial selection state of the current radio      |`boolean`                                  | `false`   |
| value        |    Value of Radio      | `any`   | ``   |
| className |  ClassName of Radio   | `string`           | ``   |
| style | Radio style | `CSSProperties`                   | `{}`      |
| buttonStyle | The style of Radio. Button depends on whether it is hollow or solid | `solid、outline`                   | `solid`      |


## Radio.Group API

| Name        | Description      | Type        | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| value        |   Currently selected value of Radio.Group | `any`         | `` |
| defaultValue    |    First default selected value of Radio.Group      | `any` | ``   |
| buttonStyle      |  The style of Radio. Button in Radio. Group, hollow or solid  |     `solid、outline`                   | `solid`   |
| disabled     |    Whether the Radio in Radio.Group is available     |   `boolean`                                  | `false`   |
| name        |  Name attribute of all 'input [type="radio"] ` under RadioGroup  |  `string`   | ``   |
| options | 	Set child elements in configuration form   |  `Array<{ label: ReactNode; value: string; disabled?: boolean; }>、string[]`  |   `` |
| optionType | Used to set the Radio options type  | `default、button`                   |    `default`      |
| size | Size of Radio | `small、default、large`                   |    `default`      |
| onValueChange | Callback function when the value selected by Radio.Group changes |   `(value: any) => void`                   | ``      |
| onChange | Callback function for onChange of Radio under Radio. Group  |   `(e: ChangeEvent<HTMLInputElement>) => void`                   | ``      |