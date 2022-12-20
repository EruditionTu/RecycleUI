---
title: Loader 加载器
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Loader 加载

用于显示组件的加载状态。

## 基本使用

Loader加载器的最基本使用。

 <code src='./demo/basic.tsx' />

##  卡片加载中

与卡片结合使用。

<code src='./demo/withCard.tsx'/>

## 整页加载

页面数据加载时显示。

<code src='./demo/allPage.tsx'/>

## API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| size        | 加载图标尺寸         | `small|default|large`         | `default` |
| loading    | 是否显示加载状态         | `boolean`                                  | `false`   |
| indicator      | 	加载指示符，可以加载一个 Icon 动画   | `ReactNode`                   | `--`   |
| tip     | 当作为包裹元素时，可以自定义描述文案         | `string`                                  | `--`   |
| color        | 	设置图标与文字的颜色         | `string`   | `--`   |
| vertical | 图标与文字垂直显示    | `boolean`                                | `false`   |
| bgColor | 自定义背景颜色 | `string`                                 | `--`      |
| fullScreen     | 是否全屏显示  | `boolean` | `false`    |