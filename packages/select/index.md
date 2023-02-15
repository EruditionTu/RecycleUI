---
title: Select
nav:
  title: Components
  path: /components
group:
  title: Data Entry
---

# Select

Select component to select value from options.

## When To Use

* A dropdown menu for displaying choices - an elegant alternative to the native `<select>` element.

* Utilizing `Radio` is recommended when there are fewer total options (less than 5).

## Basic Usage

<code src="./demo/basic.tsx"/>

## Disabled

<code src="./demo/disabled.tsx"/>

## Size

<code src="./demo/size.tsx"/>

## Option Group

<code src="./demo/group.tsx"/>

## API

### Select API

| Name        | Description      | Type         | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| value        |   During control, the value of `select` must be used with the `onChange` function to update the value of `select`      | `any`         | `--` |
| disabled    |   Disable selector   | `boolean` | `false`   |
| defaultValue      |  Compare with `value` to determine whether it is selected  | `any`  | `--`   |
| size     |   Select box size   | `large \| default \| small`    | `default`   |
