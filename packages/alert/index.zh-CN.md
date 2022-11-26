---
title: Alert 警告提示
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用
* 当某个页面需要向用户显示警告的信息时。
* 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 基本

最简单的用法，适用于简短的警告提示。

<code src="./demo/basic.tsx"/>

## 四种样式

共有四种样式`success`、`info`、`warn`、`error`

<code src="./demo/type.tsx"/>

## 可关闭的提示

显示关闭按钮，点击可关闭警告提示。

<code src="./demo/canClose.tsx"/>

## 含有辅助性文字

含有辅助性文字介绍的警告提示。

<code src="./demo/description.tsx"/>

## 图标

可口的图标让信息类型更加醒目。

<code src="./demo/icon.tsx"/>

## 自定义关闭

可以自定义关闭，自定义的文字会替换原先的关闭`Icon`。

<code src="./demo/customClose.tsx"/>

## 顶部公告

页面顶部通告形式。

<code src='./demo/banner.tsx'/>

## 轮播公告

配合`react-fast-marquee`实现消息轮播通知栏

<code src='./demo/marquee.tsx'/>

## 自定义操作

可以在右上角自定义操作项。

<code src='./demo/action.tsx'/>

## API


