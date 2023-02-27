---
title: Steps 步骤条
nav:
  title: 组件
  path: /components
group:
  title: 导航
---


# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本用法

简单的步骤条。

<code src="./demo/basic.tsx" />

## 没有详情介绍

简单的步骤条。

<code src="./demo/easy.tsx" />

## 步骤运行错误

使用 `Steps` 的 `status` 属性来指定当前步骤的状态。

<code src="./demo/error.tsx" />

## 点状步骤条

包含步骤点的进度条。

<code src="./demo/dot.tsx" />

## 步骤切换

通常配合内容及按钮使用，表示一个流程的处理进度。

<code src="./demo/steps.tsx" />

## 竖直方向的步骤条

简单的竖直方向的步骤条。

<code src="./demo/vertical.tsx"/>

## API

### Steps API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| current| 指定当前步骤，从 0 开始记数。 | `number`         | `0` |
| status | 当前步骤的状态，可选值为`wait`、`process`、`finish`、`error`  | `string`         | `process` |
| direction| 指定步骤条方向，支持水平`vertical`、`horizontal` | `vertical \| horizontal`         | `horizontal` |
| progressDot       |点状步骤条| `boolean`         | `false` |

### Steps.Step API

| 参数        | 参数描述      | 类型 | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| status| 指定状态。当不配置该属性时，会使用 `Steps` 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | `string`         | `wait` |
| title |指定每个步骤标题| `ReactNode`         | `--` |
| direction| 步骤的详情描述，可选 | `ReactNode` | `--` |
| icon       |步骤的图标| `ReactNode`         | `--` |

