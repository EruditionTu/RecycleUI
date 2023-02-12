---
title: Message
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Message

Display global messages as feedback in response to user operations.

## When To Use

* To provide feedback such as success, warning, error etc.

* A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## Basic Use

The simplest example.

<code src="./demo/basic.tsx" />

## Different types

There are six different types of global prompts: info, success, warning, error, normal, and loading.

<code src='./demo/type.tsx' />

## State change


Multiple states appear continuously through the duration attribute.

Note: There is 200ms animation before each message disappears, and the specific time needs to be calculated so that the position display is correct.

<code src="./demo/duration.tsx"/>

## Different locations

Through the position attribute, the selection appears above/below.

<code src="./demo/position.tsx"/>

## Manual shutdown

The clearable attribute allows you to manually close.

<code src="./demo/closeable.tsx" />

### MessageType API

> `MessageType = 'success' | 'info' | 'error' | 'warn' | 'loading' | 'normal'`

### MessageConfig API

| Name       |  Description                     |    Type   |   Default    |
| ----------- | -------------------------------------------- |----------|----------|
| className | Custom class name         |`string` |  `--`  |
| content    | The content when the object type is passed as a parameter              |`ReactNode` |  `--`  |
| duration  | Display time   | `number` |`{}`|
| style | Custom styles   |`CSSProperties` |  `{}`  |
| position    | display position      |`top \| bottom` |  `top`  |
| clearable  | Clearable button appears  |`boolean`|`false`|




