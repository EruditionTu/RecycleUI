---
title: Steps
nav:
  title: Components
  path: /components
group:
  title: Navigation
---

# Steps

`Steps` is a navigation bar that guides users through the steps of a task.

## When To Use

When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.



## Basic Usage

Simple step bar.

<code src="./demo/basic.tsx" />

## No details

Simple step bar.

<code src="./demo/easy.tsx" />

## Step operation error

Use the `status` attribute of `Steps` to specify the status of the current step.

<code src="./demo/error.tsx" />

## Dot step bar

A progress bar containing step points.

<code src="./demo/dot.tsx" />

## Step switching

It is usually used with content and buttons to indicate the processing progress of a process.

<code src="./demo/steps.tsx" />

## Step bar in vertical direction

Simple vertical step bar.

<code src="./demo/vertical.tsx"/>

## API

### Steps API

| Name        | Description      | Type  | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| current| Specify the current step, counting from 0. | `number`         | `0` |
| status | The status of the current step. The optional values are `wait`、`process`、`finish`、`error`  | `string`         | `process` |
| direction| Specify step bar direction, support horizontal`vertical`、`horizontal` | Specify step bar direction, support horizontal`vertical \| horizontal`         | `horizontal` |
| progressDot       |Dot step bar| `boolean`         | `false` |

### Steps.Step API

| Name        | Description      | Type | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| status| Specify the status. When this attribute is not configured, the `current` of 'Steps' will be used to automatically specify the status.可选：`wait` `process` `finish` `error` | `string`         | `wait` |
| title |Specify each step title| `ReactNode`         | `--` |
| direction| Detailed description of steps, optional | `ReactNode` | `--` |
| icon | Icon for step | `ReactNode`         | `--` |

