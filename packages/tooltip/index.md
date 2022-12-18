---
title: Tooltip
nav:
  title: Components
  path: /components
group:
  title: Data display
---

# Tooltip

The simplest usage.

<code src="./demo/basic.tsx"/>

## Position

The position has 12 directions.

<code src="./demo/placement.tsx">

## Disable text prompts

You can disable the use of text prompts by setting the disabled field.

<code src='./demo/disabled.tsx'/>

## Text prompt trigger mode

The text prompt component `<Tooltip/>` can provide text prompt operation mode by setting the attribute trigger.

<code src='./demo/trigger.tsx' />

## The text prompt box is not displayed

By setting the attribute `visibleArrow`, the text prompt box can not display arrows.

<code src='./demo/noArrow.tsx' />

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
| triggerOutsideClose     | In hover mode, if you leave the trigger element, the pop-up window will be closed, including moving to overlay. If it is false, the pop-up window will not be closed on overlay  | `boolean` | `true`    |
| clickOverlayClose | In click mode, clicking the overlay mask will close | `boolean`        |`false` |
| clickTriggerClose | In click mode, click trigger to close        | `boolean`        | `true`    |
| clickOutsideClose | In click mode, click other than overlay and trigger to close        | `boolean`        | `true`    |
| transitionName | `transitionName` can be imported as a field of `classNames` of `react-transition-group`, and customized animation  | `string`   | `--`  |
| destroyTooltipOnHide | Close the pop-up window of the covering layer. Whether to destroy the node of the covering layer | `boolean`        | `true`    |
| placement	 | The position of the cover pop-up window.        | `top|topLeft|topRight|left|leftTop|leftBottom|right|rightTop|rightBottom|bottom|bottomLeft|bottomRight`        | `top`    |
| onOpenChange | 	Show hidden callbacks.| `Function`        | `--`    |
| visibleArrow | 	Whether to display dialog box arrows.| `boolean`        | `true`    |
| content | What is displayed.	| `ReactNode`        | ``    |

Compared with the props of `overlay-trigger`, the visibleArrow field and content field are added and the overlay field is deleted.

Some features you want to add later：
* arrowPointCenter：If it is true, the dialog arrow points to the middle
* color：Change the background color of the dialog box