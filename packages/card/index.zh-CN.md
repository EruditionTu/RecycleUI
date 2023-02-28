---
title: Card 卡片
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# Card 卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 基本用法

<code src='./demo/basic.tsx'/>

## 无边框

<code src="./demo/noBorder.tsx" />

## 简洁卡片

<code src="./demo/easy.tsx" />

## 栅格卡片

在系统概览页面常常和栅格进行配合。

<code src="./demo/grid.tsx" />

## API

### Card API

| 字段      | 描述 | 类型            | 默认 |
| --------- | ----------- | --------------- | ------- |
| actions     | 卡片操作组，位置在卡片底部  | `Array<ReactNode>` | `[]`    |
| bodyStyle | 内容区域自定义样式       | `CSSProperties`        | `--`    |
| border | 是否有边框        | `boolean`        | `true`    |
| cover | 卡片封面       | `ReactNode`        | `--`    |
| extra | 卡片右上角的操作区域    | `ReactNode`        | `--`    |
| headStyle | 自定义标题区域样式 | `CSSProperties`        | `{}`    |
| hoverable | 鼠标移过时可浮起 | `boolean`        | `false`    |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean` | `--`    |
| size | card的尺寸 | `default \| small`        | `default-`    |
| title | 卡片标题   | `ReactNode`        | `--`    |
