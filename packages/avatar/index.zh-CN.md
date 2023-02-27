---
title: Avatar 头像
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基本用法

头像有四种尺寸，两种形状可选。

<code src="./demo/basic.tsx" />

## 其他类型

支持三种类型：Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

<code src="./demo/other.tsx" />

## 图片支持

在组件上使用onError事件，处理显示错误的图片。

<code src="./demo/image.tsx" />

## API

### Avatar API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| icon        | 设置头像的图标类型	         | `ReactNode`  | `--` |
| shape    | 指定头像的形状 `square` 正方形或者 `circle` 圆| `string`| `circle`|
| size      | 设置头像的大小   | `large \| small \| mini \|default` | `default`   |
| src     |   图片类头像的资源地址 |               `string`                | `--`   |
| alt        | 规定图像的替代文本  | `string`  | `--`   |
| onError        | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为         | `()=>void`  | `--`   |
