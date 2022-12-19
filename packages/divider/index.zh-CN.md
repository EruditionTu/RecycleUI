---
title: Divider 分割线
nav:
  title: 组件
  path: /components
group:
  title: 布局
---

## Divider 分割线

区隔内容的分割线。

## 何时使用

* 对不同章节的文本段落进行分割。
* 对行内文字/链接进行分割，例如表格的操作列。

## 水平分割线

默认为水平分割线，可在中间加入文字。

<code src='./demo/horizontal.tsx' />

## 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

<code src='./demo/vertical.tsx' />

## 带文字的分割样式

分割线中带有文字，可以用 `align` 指定文字位置。

<code src='./demo/withText.tsx' />

## API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| children        | 嵌套的标题         | `ReactNode`         | `<></>` |
| className    | 分割线样式类         | `string`                                  | ``   |
| dashed	      | 是否虚线   | `boolean`                   | `false`   |
| align     | 分割线标题的位置	         | `left | right | center`          | `center`   |
| orientationMargin        | 标题和最近 left/right 边框之间的距离，去除了分割线，同时 `orientation` 必须为 `left` 或 `right`       | `number` | ``   |
| style | 分割线样式对象 | `CSSProperties`                                 | `{}`      |
| type     | 水平还是垂直类型  | `horizontal | vertical` | `horizontal`    |