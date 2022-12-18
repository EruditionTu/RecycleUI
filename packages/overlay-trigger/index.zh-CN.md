---
title: OverlayTrigger 基础气泡弹窗
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# OverlayTrigger 基础气泡框

基础的弹窗触发组件，基于Overlay组件开发，添加事件和12个方向的位置，组件Tooltip和Popover等弹窗触发组件都会基于这个组件开发。

## 何时使用

在tooltip，popover等不能提供需要的功能时，使用基础气泡弹窗OverlayTrigger可以更加灵活的定制一个气泡弹窗组件。

## 基本使用

最简单的用法。

<code src='./demo/basic.tsx' />

## 配合组件使用

配合Card组件使用。

<code src='./demo/withcomp.tsx' />

## 弹出层定位

位置有 12 个方向，根据 placement 参数来设置。

<code src='./demo/placement.tsx' />

## 延迟进入和关闭

延迟属性，只针对 `trigger=hover` 有效。

<code src='./demo/delay.tsx'/>

## Portal挂载节点

设置 usePortal={false} 将模态对话框生成到根节点的里面。

<code src='./demo/noPortal.tsx' />

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
| overlay | 	触发显示的弹窗内容。 | `ReactElement`        | `--`    |
