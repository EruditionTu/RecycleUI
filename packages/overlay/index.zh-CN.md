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