---
title: Pagination 分页
nav:
  title: 组件
  path: /components
group:
  title: 导航
---

# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

* 当加载/渲染所有数据将花费很多时间时；
* 可切换页码浏览数据。

## 基本使用

<code src="./demo/basic.tsx"/>

## 迷你分页

<code src="./demo/mini.tsx"/>

## 对齐

目前有三种对齐方式 ``左边(left)`、`中间(center)`、`右边(right)`。

<code src='./demo/align.tsx'/>

## API

### Pagination API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| current        | 当前页数，选中的页数   | `number`         | `1` |
| total   | 数据总数  | `number`  | `1`   |
| pageSize  | 每页条数         | `number`         | `0` |
| pageSizeOptions    | 指定每页可以显示多少条   | `number` | `10`   |
| divider	      | 页码之间是否间隔  | `boolean` | `false`   |
| size     | 当为 `small` 时，是小尺寸分页         | `small \| default`  | `default`|
| alignment        | 对齐   | `left \| center \| right` | `left`   |
| onChange | 页码改变的回调，返回改变后的页码 | `Function(current, total, pageSize)`   | `--`      |
| pageSizeOptions     | `pageSize` 变化的回调  | `Function(current, pageSize)` | `--`    |
