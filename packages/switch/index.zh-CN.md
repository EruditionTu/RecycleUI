---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Switch 开关

## 何时使用

* 需要表示开关状态/两种状态之间的切换时；
* 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本使用

最简单的用法。

<code src='./demo/basic.tsx'/>

## 不可用

Switch 失效状态。

<code src='./demo/disabled.tsx' />

## 开启和关闭状态的文字

带有开启和关闭状态下的文字提示。

<code src='./demo/textAndIcon.tsx' />

## 尺寸

size="small" 表示小号开关，size="large"表示大号开关，size="default"表示默认中等大小。

<code src='./demo/size.tsx'/>