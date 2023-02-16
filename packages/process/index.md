---
title: Process
nav:
  title: Components
  path: /components
group:
  title: Data display
---

# Progress 

Display the current progress of an operation flow.

## When To Use

If it will take a long time to complete an operation, you can use `Progress` to show the current progress and status.

* When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
* When you need to display the completion percentage of an operation.

## Basic Usage


<code src='./demo/basic.tsx'/>

## Circle Process

<code src="./demo/circle.tsx"/>

## Circle Process

<code src="./demo/linear.tsx"/>

## API

> type =`linear \| circle \| dashboard`

### LinearProcess API


| Name      | Description      | Type   | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| percent        | percentage   | `number`         | `0` |
| showInfo   | Whether to display progress value or status icon | `boolean`  | `true`   |
| status  | status：`success`，`normal`，`exception`，`active（仅限linear）` | `string`         | `--` |
| strokeColor    |  Color of progress bar  | `string` | `--`   |
| strokeLinecap	      | Style of progress bar  | `string` | `--`   |
| trailColor |  Color of incomplete segments | `string`  | `--`|

### CircleProcess API

| Name      | Description      | Type   | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| percent        | percentage   | `number`         | `0` |
| showInfo   | Whether to display progress value or status icon | `boolean`  | `true`   |
| status  | status：`success`，`normal`，`exception`，`active（仅限linear）` | `string`         | `--` |
| strokeColor    |  Color of progress bar  | `string` | `--`   |
| strokeLinecap	      | Style of progress bar  | `string` | `--`   |
| trailColor |  Color of incomplete segments | `string`  | `--`|
| width | Circular progress bar canvas width, unit px     | `number`  | `132`|



