---
title: Overlay 基础弹窗
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Overlay 基础弹窗

一个基础的弹窗组件，其他的类似Tooltip组件，Dawer，Alert等组件都来自于这个组件的封装。

## 何时使用

当组件库提供的弹窗已经无法满足开发的需要时，可以通过提供的基础弹窗进行修改。

## 基本使用

<code src='./demo/basic.tsx'/>

## 自定义弹出内容

<code src='./demo/custom.tsx'>

## 默认挂载在根节点body下面

`usePortal`属性可以控制组件是否使用Portal将节点生成到根节点的外面。

<code src='./demo/portal.tsx'/>

## 自定义动画

该组件的动画是通过`react-transition-group`组件封装的。可以通过属性`transitionName`来定义弹窗的动画，详细可以查看`react-transition-group`的使用方式，https://github.com/reactjs/react-transition-group。

<code src='./demo/customAnimation/customAnimation.tsx' />

``` less
@animation-prefix:~'animation-flipX';
@native-prefix:~'recycle-ui-overlay';
.@{animation-prefix}-enter .@{native-prefix}-backdrop {
  opacity: 0.01;
}
.@{animation-prefix}-enter-active .@{native-prefix}-backdrop {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.@{animation-prefix}-exit .@{native-prefix}-backdrop {
  opacity: 1;
}
.@{animation-prefix}-exit-active .@{native-prefix}-backdrop {
  opacity: 0.01;
  transition: opacity 1s ease-in;
}
.@{animation-prefix}-enter-active .@{native-prefix}-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipInX;
}
.@{animation-prefix}-exit-active .@{native-prefix}-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipOutX;
}

.@{animation-prefix}-enter,
.@{animation-prefix}-enter-done,
.@{animation-prefix}-exit {
  display: inherit;
}

@keyframes flipOutX {
  0% { transform: perspective(400px); }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipInX {
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateX(-5deg);
  }
  to { transform: perspective(400px); }
}

```

## 自定义挂载节点

如果`usePortal`属性为真，那么可以使用containerDom将overlay组件挂载到指定的dom节点下面。

<code src='./demo/customContainer.tsx' />

## API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| open        | 弹窗是否可见         | `boolean`         | `false` |
| usePortal    | 是否使用react16的方案Portal，将模态对话框生成到根节点的外面         | `boolean`                                  | `true`   |
| containerDom      | 对话框生成到节点外面挂载的dom节点   | `HTMLElemet`                   | `document.body`   |
| maskClosable     | 点击遮盖层是否允许关闭         | `boolean`                                  | `true`   |
| portalProps        | 设置 Portal 组件属性         | `{container?:HTMLElement}`（目前只有这一个属性，之后可能会加其他属性说不定😂）   | `{}`   |
| backdropProps | 遮罩层 HTML 属性设置    | `HTMLAttributes`                                | `{}`   |
| dialogProps | 按钮点击回调事件 | `HTMLAttributes`                                 | `{}`      |
| unmountOnExit     | 退出动画卸载组件  | `CSSProperties` | `{}`    |
| hasBackdrop | 是否有背景，是否向<body> 添加样式 `.recycle-ui-overlay-open` 防止滚动条出现 | `boolean`        |`true` |
| transitionName | `transitionName`可以作为`react-transition-group`的`classNames`的字段传入，自定义动画  | `string`   | `--`  |
| timeout | 动画的执行时间        | `number`        | `300`    |
| onClose | 点击遮罩层回调函数，通过这个函数设置 open=false 关闭。onClosed 是弹出框关闭动画执行完成后的回调函数，有明显区别容易混淆。 | `Function`        | `--`    |
| onEnter	 | 顺序 1，应用 enter 或 appear 后立即触发 `CSSTransition` 回调。        | `Function`        | `--`    |
| onOpening | 顺序 2，**打开**立即执行，在应用 enter-active 或 appear-active 类后立即触发 `CSSTransition` 回调。| `Function`        | `--`    |
| onOpened	 | 顺序 3，**打开**动画播放完成执行，在应用 exiting 状态之前启动回调。  | `Function`        | `--`    |
| onClosing	 | 顺序 4，**关闭**立即执行，应用 exit-active 后立即触发 `CSSTransition` 回调。    | `Function`        | `--`    |
| onClosed	 | 	顺序 5，**关闭**动画播放完成立即执行，删除 exit 类后立即触发 `CSSTransition` 回调，并将 exit-done 类添加到 DOM 节点。  | `Function`        | `--`    |

支持传递 `CSSTransition` 原生事件。
