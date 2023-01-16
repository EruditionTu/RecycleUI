---
title: OverlayTrigger
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# OverlayTrigger

The basic pop-up trigger component is developed based on the Overlay component, adding events and 12 direction locations. The component Tooltip, Popover and other pop-up trigger components will be developed based on this component.

## When to use

When the tooltip and popper cannot provide the required functions, you can customize a bubble pop-up component more flexibly by using the basic bubble pop-up OverlayTrigger.

## Basic use

The simplest usage.

<code src='./demo/basic.tsx' />

## Used with components

Used with Card components.

<code src='./demo/withcomp.tsx' />

## Pop up layer positioning

The position has 12 directions, which are set according to the placement parameter.

<code src='./demo/placement.tsx' />

## Delayed entry and closing

The delay attribute is only valid for 'trigger=hover'.

<code src='./demo/delay.tsx'/>

## Portal mount node

Set usePortal={false} to generate the modal dialog box into the root node.

<code src='./demo/noPortal.tsx' />

## API

| Name        | Describe      | Type                                       | default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| open        | Whether the pop-up window is visible         | `boolean`         | `false` |
| usePortal    | Whether to use the react16 scheme Portal to generate the modal dialog box outside the root node         | `boolean`                                  | `true`   |
| overlayContainer      | Pop up to generate a dom node mounted outside the node   | `HTMLElemet`                   | `document.body`   |
| defaultOpen     | Whether the covering pop-up layer is turned on by default         | `boolean`                                  | `false`   |
| trigger        | Whether the covering pop-up layer is turned on by default         | `click|hover|focus` | `hover`   |
| delay | Opening or closing delay (if it is a number type number, the opening and closing delay are all this number, which can also be customized through the object)    | `number|{show?:number,hide?:number}`                                | ``   |
| disabled | Disable pop-up target | `boolean`                                 | `false`      |
| hoverOverlayClose     | In hover mode, if you leave the trigger element, the pop-up window will be closed, including moving to overlay. If it is false, the pop-up window will not be closed on overlay  | `boolean` | `true`    |
| clickOverlayClose | In click mode, clicking the overlay mask will close | `boolean`        |`false` |
| clickTriggerClose | In click mode, click trigger to close        | `boolean`        | `true`    |
| clickOutsideClose | In click mode, click other than overlay and trigger to close        | `boolean`        | `true`    |
| transitionName | `transitionName` can be imported as a field of `classNames` of `react-transition-group`, and customized animation  | `string`   | `--`  |
| destroyTooltipOnHide | Close the pop-up window of the covering layer. Whether to destroy the node of the covering layer | `boolean`        | `true`    |
| placement	 | The position of the cover pop-up window.        | `top|topLeft|topRight|left|leftTop|leftBottom|right|rightTop|rightBottom|bottom|bottomLeft|bottomRight`        | `top`    |
| onOpenChange | 	Show hidden callbacks.| `Function`        | `--`    |
| overlay | 	Trigger the pop-up content displayed. | `ReactElement`        | `--`    |