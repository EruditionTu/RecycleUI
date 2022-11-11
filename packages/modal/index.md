---
title: Modal
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Modal

Modal dialogs.

## When to Use

When requiring users to interact with the application, but without jumping to a new page and interrupting the user's workflow, you can use Modal to create a new floating layer over the current page to get user feedback or display information. Additionally, if you need show a simple confirmation dialog, you can use antd.Modal.confirm(), and so on.

## Baisc Use

Basic Modal.

<code src="./demo/basic.tsx"></code>

## Custom Footer

Whether a footer is required for Modal can be set according to the needFooter field, and footer components can also be specified in the footer field.

<code src="./demo/footer.tsx">

## Information prompt

For various types of information prompts, only one button is provided for closing.

<code src="./demo/dialog.tsx"></code>

## Customize the width of the modal box

Use contentWidth to set the width of the modal dialog box.

<code src="./demo/width.tsx">

## Asynchronous closing mode box

Click OK to asynchronously close the dialog box, such as submitting a form.

<code src="./demo/async.tsx"/>

## Function Modal returns Promise

Use function components such as confirm () to quickly pop up the confirmation box. OnCancel/onOk returns promise to delay closing

<code src="./demo/returnPromise.tsx"/>

## Modify button text

You can use okText to modify the text of the confirmation button and cancelText to modify the text of the cancel button.

<code src="./demo/buttonText.tsx"/>

## Custom pop-up location

You can set the module location through center, style, etc.

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


## Modal Methed API

| 字段      | 描述 | 类型            | 类型 |
| --------- | ----------- | --------------- | ------- |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |