---
title: Breadcrumb 面包屑
nav:
  title: 组件
  path: /components
group:
  title: 导航
---

# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

* 当系统拥有超过两级以上的层级结构时；
* 当需要告知用户『你在哪里』时；
* 当需要向上导航的功能时。

## 基本使用

最基本的用法。

<code src='./demo/basic.tsx' />

## 带有图标的

图标放在文字前面。

<code src='./demo/withIcon.tsx'/>

## 自定义分隔符

使用 separator=">" 可以自定义分隔符。

<code src='./demo/customSeq.tsx'/>

## 带下拉菜单的面包屑

面包屑支持下拉菜单。


## Breadcrumb API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | Breadcrumb的className样式         | `string`         | `<></>` |
| style    | Breadcrumb的style样式         | `CSSProperties`                                  | ``   |
| separator	      | Breadcrumb中的每一项的分割符   | `ReactNode`                   | `/`   |

## Breadcrumb.Item API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | Breadcrumb.Item的className样式         | `string`         | `<></>` |
| style    | Breadcrumb.Item的style样式         | `CSSProperties`                                  | ``   |
| href	      | 链接的地址   | `string`                   | ``   |
| separator	      | Breadcrumb.Item与前一个的分割符   | `ReactNode`                   | `/`   |
| dropdownProps	      | 弹出下拉菜单的自定义配置   | ``                   | ``   |
| menu	      | 菜单项配置   | ``                   | ``   |