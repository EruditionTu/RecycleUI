---
title: Message 消息框
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Message 全局提示

全局展示操作反馈信息。

## 何时使用

* 可提供成功、警告和错误等反馈信息。
* 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 基本使用

最简单的例子。

<code src="./demo/basic.tsx" />

## 不同类型

全局提示有 6 种不同的类型，分别为：info, success, warning, error, normal, loading。

<code src="./demo/type.tsx" />

## 状态改变

通过 duration 属性，连续出现多个状态。

注意: 每一条 Message 消失前有 200ms 的动画，需计算具体时间以便于位置显示正确。

<code src="./demo/duration.tsx" />

## 不同位置

通过 position 属性，选择在上方/下方出现。

<code src="./demo/position.tsx" />

## 手动关闭

通过 clearable 属性，可手动关闭。

<code src="./demo/closeable.tsx" />

## API

组件提供了一些静态方法，使用的方式和参数如下：

* message.open(type:MessageType,config:MessageConfig)
* message.success(config)
* message.error(config)
* message.info(config)
* message.warn(config)
* message.loading(config)
* message.normal(config)

### MessageType API

> `MessageType = 'success' | 'info' | 'error' | 'warn' | 'loading' | 'normal'`

### MessageConfig API

| 字段       | 字段                                          |    类型   |    默认    |
| ----------- | -------------------------------------------- |----------|----------|
| className | 自定义类名                                |`string` |  `--`  |
| content    | 对象类型传参时的内容                                  |`ReactNode` |  `--`  |
| duration  | 显示时间   | `number` |`{}`|
| style | 自定义样式                                |`CSSProperties` |  `{}`  |
| position    | 显示位置      |`top \| bottom` |  `top`  |
| clearable  | 出现可清除按钮   |`boolean`|`false`|



