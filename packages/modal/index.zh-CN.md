---
title: Modal 弹窗
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Modal

模态对话框

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。

## 基本使用

一个基础的模态框。

<code src="./demo/basic.tsx"></code>

## 自定义页脚

根据needFooter字段可以设置Modal是否需要页脚，footer字段也可以指定页脚组件。

<code src="./demo/footer.tsx">

## 信息提示

各种类型的信息提示，只提供一个按钮用于关闭。

<code src="./demo/dialog.tsx"></code>

## 自定义模态框的宽度

使用 contentWidth 来设置模态对话框的宽度。

<code src="./demo/width.tsx">

## 异步关闭模态框

点击确定后异步关闭对话框，例如提交表单。

<code src="./demo/async.tsx"/>

## 函数Modal返回Promise

使用 confirm()等函数组件可以快捷地弹出确认框。onCancel/onOk 返回 promise 可以延迟关闭。

<code src="./demo/returnPromise.tsx"/>

## 修改按钮文字

可以通过okText来修改确认按钮文字，cancelText来修改取消按钮文字。

<code src="./demo/buttonText.tsx"/>

## 自定义弹窗位置

可以通过center，style等来设置modal位置。

<code src="./demo/position.tsx"/>

## API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| visiable        | 弹窗是否可见         | `boolean`         | `false` |
| title    | 弹窗标题         | `string`                                  | `Modal`   |
| contentWidth      | 弹窗的宽度   | `string/number（如果为string可以为100px或者50%,number可以为数字，单位是px）`|  `520px` |
| closable        | 是否显示关闭icon         | `boolean`                                | `true`   |
| closeIcon        | 关闭的icon         | `boolean`                                | `true`   |
| cancelButtonProps     | 取消按钮的参数         | `ButtonProps`                                  | {}   |
| cancelText        | 取消按钮的文案         | `string`                                | `取消`   |
| shape        | 按钮形状         | `circle/rect/round`                                | `rect`   |


## Button Group API

| 字段      | 描述 | 类型            | 类型 |
| --------- | ----------- | --------------- | ------- |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |