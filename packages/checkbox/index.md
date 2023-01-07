---
title: Checkbox
nav:
  title: Components
  path: /components
group:
  title: Data Entry
---

# Checkbox

Checkbox component.

## When To Use

* Used for selecting multiple values from several options.
* If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## Basic

Basic usage of checkbox.

<code src='./demo/basic.tsx'/>

## Disabled

Disabled checkbox.

<code src='./demo/disabled.tsx'/>

## Checkbox Group

方便的从数组生成 Checkbox 组。

<code src='./demo/someGroup.tsx'/>

## Controlled Checkbox

Communicated with other components.

<code src='./demo/beHandled.tsx' />

## Check all

Check all.

<code src='./demo/allSelect.tsx'/>

## Checkbox API

| Name        | Description      | Type         | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| name        | name attribute of `input[type="checkbox"]`         | `string`         | `--` |
| value    | value attribute for `input[type="checkbox"]`         | `any`| `--`   |
| checked      | Specify whether it is currently selected   | `boolean`  | `false`   |
| defaultChecked     | Initially selected       | `boolean`    | `false`   |
| disabled        |    Whether the checkbox is invalid     | `boolean`   | `false`   |
| onCheckedChange | Callback function when the checkbox selection status changes    | `function(e:boolean)`           | `--`   |
| onChange | The callback function in case of change, which is equivalent to the native event of Input | `funciton(ChangeEvent<HTMLInputElement>)`  | `--`      |

## Checkbox.Group API

| Name        | Description      | Type   | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| name        | The `name` property of all `input[type="checkbox"]` children | `string` | `--` |
| value    | Specify the selected option| `Array<any>` | `[]`   |
| group      |  Specify options  | `Array<CheckboxProps>` | `[]`   |
| defaultValue     |Default Selected Options| `Array<any>`| `[]`   |
| disabled | Group failure | `boolean`   | `false`   |
| onValueChange | `Checkbox. Group ` Callback when the selection status changes | `(value: Array<any>) => void` | `--`|

