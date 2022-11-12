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
| title    | 弹窗标题         | `ReactNode`                                  | `Modal`   |
| content        | Modal弹窗中的内容         | `ReactNode` | `<></>`   |
| footer        | Modal弹窗的底部的Dom         | `ReactNode`                                | ``   |
| needFooter       | 是否渲染Modal的底部Dom         | `boolean`                                | `true`   |
| contentWidth      | 弹窗的宽度   | `string/number（如果为string可以为100px或者50%,number可以为数字，单位是px）`|  `520px` |
| closable        | 是否显示关闭icon         | `boolean`                                | `true`   |
| closeIcon        | 关闭的icon         | `boolean`                                | `true`   |
| okButtonProps        | 确定按钮的参数         | `ButtonProps`                                | `{}`   |
| okText        | 确定按钮的文案         | `string`                                | `确定`   |
| cancelButtonProps     | 取消按钮的参数         | `ButtonProps`                                  | `{}`   |
| cancelText        | 取消按钮的文案         | `string`                                | `取消`   |
| keyboard        | 是否可以通过esc关闭Modal         | `boolean`                                | `true`   |
| maskClosable        | 是否可以通过点击遮盖层关闭Modal         | `boolean`                                | `true`   |
| getContainer        | 指定Modal渲染进入的DOM元素（目前没有使用，之后会加上）         | `HTMLElement | false（如果是false意味着就在Modal本来的位置渲染DOM）`                       | `false`   |
| maskStyle        | 遮盖层的style样式         | `CSSProperties`                                | `{}`   |
| maskClass        | 遮盖层的class样式         | `string`                                | ``   |
| contentStyle        | 遮盖层的style样式         | `string`                                | ``   |
| contentClass        | 遮盖层的class样式         | `string`                                | ``   |
| modalRender （注意内存泄漏的问题）       | 自定义弹窗         | `(modal:ReactNode)=>ReactNode`           | ``   |
| afterClose        | Modal完全关闭之后的回调         | `Function`                                | ``   |
| onOk        | 点击确定之后的回调         | `Function`                                | ``   |
| onCancel        | 点击取消之后的回调         | `Function`                                | ``   |



## Modal Methed API

Modal同样提供了一些语法糖API
* `Modal.confirm` 用于弹出一个对话框
* `Mdoal.error` 用于弹出弹出一个报错对话框
* `Modal.success` 用于弹出一个成功对话框
* `Modal.info` 用于弹出一个信息对话框
* `Modal.warning` 用于弹出一个警告对话框 
* `Modal.method`可以通过type字段来指定上述类型的对话框

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| type（只有method有这个字段）    | 弹窗类型         | `confirm|error|success|info|warning`                                  | ``   |
| title    | 弹窗标题         | `ReactNode`                                  | `Modal`   |
| content        | Modal弹窗中的内容         | `ReactNode` | `<></>`   |
| footer        | Modal弹窗的底部的Dom         | `ReactNode`                                | ``   |
| needFooter       | 是否渲染Modal的底部Dom         | `boolean`                                | `true`   |
| contentWidth      | 弹窗的宽度   | `string/number（如果为string可以为100px或者50%,number可以为数字，单位是px）`|  `520px` |
| closable        | 是否显示关闭icon         | `boolean`                                | `true`   |
| closeIcon        | 关闭的icon         | `boolean`                                | `true`   |
| okButtonProps        | 确定按钮的参数         | `ButtonProps`                                | `{}`   |
| okText        | 确定按钮的文案         | `string`                                | `确定`   |
| cancelButtonProps     | 取消按钮的参数         | `ButtonProps`                                  | `{}`   |
| cancelText        | 取消按钮的文案         | `string`                                | `取消`   |
| destroyOnClose        | 是否在关闭Modal后销毁Dom         | `boolean`                                | `false`   |
| keyboard        | 是否可以通过esc关闭Modal         | `boolean`                                | `true`   |
| maskClosable        | 是否可以通过点击遮盖层关闭Modal         | `boolean`                                | `true`   |
| getContainer        | 指定Modal渲染进入的DOM元素（目前没有使用，之后会加上）         | `HTMLElement | false（如果是false意味着就在Modal本来的位置渲染DOM）`                       | `false`   |
| maskStyle        | 遮盖层的style样式         | `CSSProperties`                                | `{}`   |
| maskClass        | 遮盖层的class样式         | `string`                                | ``   |
| contentStyle        | 遮盖层的style样式         | `string`                                | ``   |
| contentClass        | 遮盖层的class样式         | `string`                                | ``   |
| modalRender （注意内存泄漏的问题）       | 自定义弹窗         | `(modal:ReactNode)=>ReactNode`           | ``   |
| afterClose        | Modal完全关闭之后的回调         | `Function`                                | ``   |
| onOk        | 点击确定之后的回调         | `Function`                                | ``   |
| onCancel        | 点击取消之后的回调         | `Function`                                | ``   |


## 注意：
* 直接使用Modal组件的话会在Modal原来的位置渲染Dom，而函数会挂载在body下的div里面并且在关闭之后会直接销毁dom，getContainer目前未作处理
* 如果使用语法糖函数弹出Modal，那么就会在外层的body中进行挂载渲染，由于使用的ReactDOM。render挂载，动态创建新的 React 实体。其 context 与当前代码所在 context 并不相同，因而无法获取 context 信息。
* 如果使用modalRender属性注意内存泄漏的问题，如果使用的是函数弹窗或者开启了Modal的destroyOnClose需要注意内存泄漏，应为在隐藏之后直接销毁dom
* 后续会加上拖拽属性以及getContainer的处理