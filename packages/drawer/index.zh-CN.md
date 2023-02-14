---
title: Drawer 抽屉
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到原任务。

* 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。

* 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。

## 基础用法

<code src="./demo/basic.tsx"/>

## 显示位置

<code src="./demo/position.tsx"/>

## 添加页脚

<code src="./demo/footer.tsx"/>

## API


### Drawer API

| 字段       | 字段                                          |    类型   |    默认    |
| ----------- | -------------------------------------------- |----------|----------|
| title | 抽屉标题    |`string` |  `--`  |
| icon    | 设置对话框右上角图标                                  |`ReactNode` |  `--`  |
| isOpen  | 是否可见   | `boolean` |`false`|
| closable | 是否显示右上角的关闭按钮        |`boolean` |  `true`  |
| placement    | 抽屉的方向      |`top \| bottom \| left \| right` |  `right`  |
| size  | 高度/宽度，在 `placement` 为 `top` 或 `bottom` 时使用为设置高度，否则设置宽度   |`number`|`--`|
| bodyProps  | 抽屉填充内容的参数样式对象，例如`className`,`style`等   |`Object`|`{}`|