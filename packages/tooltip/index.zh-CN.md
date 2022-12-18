---
title: Tooltip 文字展示
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---
# Tooltip 文字展示

简单的文字提示气泡框。
## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。

## 基本使用

最简单的用法。

<code src="./demo/basic.tsx"/>

## 位置

位置有 12 个方向。

<code src="./demo/placement.tsx">

## 禁用文字提示

可以通过disabled字段设置禁止使用文字提示。

<code src='./demo/disabled.tsx'/>

## 文字提示触发方式

文字提示组件 `<Tooltip />`，通过设置属性 trigger 可以文字提示操作方式。

<code src='./demo/trigger.tsx' />

## 文字提示框不显示

通过设置属性 `visibleArrow` 可以文字提示框不显示箭头。

<code src='./demo/noArrow.tsx' />

## API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| open        | 弹窗是否可见         | `boolean`         | `false` |
| usePortal    | 是否使用react16的方案Portal，将模态对话框生成到根节点的外面         | `boolean`                                  | `true`   |
| overlayContainer      | 弹窗生成到节点外面挂载的dom节点   | `HTMLElemet`                   | `document.body`   |
| defaultOpen     | 遮盖弹窗层是否默认打开         | `boolean`                                  | `false`   |
| trigger        | 触发弹窗的方式         | `click|hover|focus` | `hover`   |
| delay | 打开或者关闭的延时（如果是一个number类型的数字，那么打开关闭延时都是这个数，还可以通过对象自定义）    | `number|{show?:number,hide?:number}`                                | ``   |
| disabled | 是否禁用弹出目标 | `boolean`                                 | `false`      |
| triggerOutsideClose     | hover模式下，离开trigger元素就会关闭弹窗，包括移到overlay上面也会，为false，那么在overlay上不会关闭  | `boolean` | `true`    |
| clickOverlayClose | click模式下，点击overlay遮盖层会关闭 | `boolean`        |`false` |
| clickTriggerClose | click模式下，点击trigger可以关闭        | `boolean`        | `true`    |
| clickOutsideClose | click模式下，点击overlay和trigger之外的可以关闭        | `boolean`        | `true`    |
| transitionName | `transitionName`可以作为`react-transition-group`的`classNames`的字段传入，自定义动画  | `string`   | `--`  |
| destroyTooltipOnHide | 遮盖层弹窗关闭是否销毁遮盖层的节点 | `boolean`        | `true`    |
| placement	 | 遮盖层弹窗的位置。        | `top|topLeft|topRight|left|leftTop|leftBottom|right|rightTop|rightBottom|bottom|bottomLeft|bottomRight`        | `top`    |
| onOpenChange | 	显示隐藏的回调。| `Function`        | `--`    |
| visibleArrow | 	是否显示对话框箭头。| `boolean`        | `true`    |
| content | 	显示的内容。| `ReactNode`        | ``    |

相比较于`overlay-trigger`的props，新增visibleArrow字段和content字段，删除overlay字段。

后续的一些想加上的feature：
* arrowPointCenter：为真，那么对话框箭头指向中间
* color：改变对话框的背景颜色
