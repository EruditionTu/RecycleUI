---
title: Empty 空状态
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# Empyt 空状态

空状态时的展示占位图。

## 何时使用

* 当目前没有数据时，用于显式的用户提示。
* 初始化场景时的引导创建流程。

## 基本使用

简单展示。

<code src="./demo/basic.tsx"></code>

## 改变描述

改变空状态描述。

<code src="./demo/desc.tsx"></code>

## 改变空状态图片

可以通过设置 image 为其他图片。

<code src="./demo/img.tsx"></code>

## 填充 footer

通过footer字段填充底部。

<code src="./demo/footer.tsx"></code>

## API

| 字段       | 字段                                          |
| ----------- | --------------------------------------------- |
| description | 自定义描述内容                                |
| image       | 设置显示图片                                  |
| imageStyle  | 设置图片的样式，仅仅在传入自定义 image 时生效 |
