---
title: Process 进度条
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
---

# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

* 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
* 当需要显示一个操作完成的百分比时。

## 基本使用

标准的进度条。

<code src='./demo/basic.tsx'/>

## 环形进度条

<code src="./demo/circle.tsx"/>

## 条形进度条

<code src="./demo/linear.tsx"/>

## API

> type =`linear | circle | dashboard`

### LinearProcess API


| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| percent        | 百分比   | `number`         | `0` |
| showInfo   | 是否显示进度数值或状态图标 | `boolean`  | `true`   |
| status  | 状态：`success`，`normal`，`exception`，`active（仅限linear）` | `string`         | `--` |
| strokeColor    | 进度条的色彩   | `string` | `--`   |
| strokeLinecap	      | 进度条的样式  | `string` | `--`   |
| trailColor | 未完成的分段的颜色         | `string`  | `--`|

### CircleProcess API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| percent        | 百分比   | `number`         | `0` |
| showInfo   | 是否显示进度数值或状态图标 | `boolean`  | `true`   |
| status  | 状态：`success`，`normal`，`exception`，`active（仅限linear）` | `string`         | `--` |
| strokeColor    | 进度条的色彩   | `string` | `--`   |
| strokeLinecap	      | 进度条的样式  | `string` | `--`   |
| trailColor | 未完成的分段的颜色         | `string`  | `--`|
| width | 圆形进度条画布宽度，单位 px         | `number`  | `132`|



