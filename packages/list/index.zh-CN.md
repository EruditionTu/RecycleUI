---
title: List 列表
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# List 列表

通用列表。

## 何时使用

最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。

## 基础用法

<code src="./demo/basic.tsx" />

## 特殊用法

<code src="./demo/teshu.tsx"/>

## 禁用行

<code src="./demo/disabledRow.tsx" />

## 行激活

<code src="./demo/activeRow.tsx"  />

## 斑马线

<code src="./demo/banma.tsx" />

## 列表为超链接

<code src="./demo/link.tsx"/>

## 展示额外内容

<code src="./demo/extra.tsx"/>

## API

### List API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 设置行尺寸，分别大、中、小三种尺寸 | `small \| default \| large` | `deafult` |
| bordered | 是否展示边框 | `boolean` | `true` |
| noHover |取消鼠标移过时边框阴影 |`boolean`| `false` |
| active | 激活列表，鼠标经过边框阴影效果 | `boolean` | `false` |
| striped | 斑马线效果 | `boolean` | `false` |
| footer | 列表底部 | `ReactNode` | `--` |
| header | 列表头部 | `ReactNode` | `--` |
| dataSource | 列表数据源 | `Array[]` | `--` |
| renderItem | 通过回调函数返回Dome，渲染列表每个行 | `Function(item,index)` | `--` |

### List.Item API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 激活 | `small \| default \| large` | `deafult` |
| extra | 额外内容，展示右侧内容 | `boolean` | `true` |
| disabled |禁用 |`boolean`| `false` |
| tagName | 设置子节点标签名，默认 `<div />` 标签，也可以指定路由 `<Link />` | `string` | `div` |
| href | 规定链接的目标，值存在并且 tagName 为 String 时候是个超链接，在超链接上加 href 的值就是你传进来的 href值，此时将可以设置标签`<a>`的所有属性。 | `boolean` | `false` |