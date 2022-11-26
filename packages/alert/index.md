---
title: Alert
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Alert

Warning prompt, showing the information that needs attention.

## When to use
* When a page needs to display warning information to the user.
* The static display form of non floating layer is always displayed and will not disappear automatically. The user can click Close.

## Basic

The simplest usage, suitable for short warning prompts.

<code src="./demo/basic.tsx"/>

## Four styles

There are four styles`success`、`info`、`warn`、`error`

<code src="./demo/type.tsx"/>

## Prompt that can be turned off

The Close button is displayed. Click it to close the warning prompt.

<code src="./demo/canClose.tsx"/>

## With supporting text

Warning prompt with auxiliary text introduction.

<code src="./demo/description.tsx"/>

## Icon

Delicious icons make information types more eye-catching.

<code src="./demo/icon.tsx"/>

## Custom Close

You can customize the closing, and the customized text will replace the original closing`closeIcon`。

<code src="./demo/customClose.tsx"/>

## Top Announcement

Notice form at the top of the page.

<code src='./demo/banner.tsx'/>

## Carousel announcement

Cooperate with `react fast marquee` to realize message carousel notification bar

<code src='./demo/marquee.tsx'/>

## Custom Action

You can customize action items in the upper right corner.

<code src='./demo/action.tsx'/>

## API


| Name        | Decscription      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| action        | Custom Action Item	         | `solid / transparent / text / link`         | `solid` |
| type    | Specifies the style of the warning prompt. There are four options `success`、`info`、`warning`、`error`         | `string`                                  | `success`   |
| banner      | Used as top announcement   | `boolean`                   | `false`   |
| message     | Warning content         |               `ReactNode`                | `<></>`   |
| description        | Auxiliary text introduction of warning prompt          |           `ReactNode`               | `<></>`   |
| closeIcon        | Custom Close Button         | `ReactNode`                                | `<></>`   |
| showCloseIcon | Whether to display the close button | `boolean`                                 | `false`      |
| icon | Custom notification icon | `ReactNode`                                 | `<></>`      |
| showIcon | Whether to display notification icon | `boolean`                                 | `false`      |
| style     | custom style  | `CSSProperties` | `--`    |
| className | class        | `string`        | `--`    |

