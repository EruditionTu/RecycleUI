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

| Name        | Describe      | Type                                       | default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| visiable        | Whether the pop-up window is visible         | `boolean`         | `false` |
| title    | Pop up title        | `ReactNode`                                  | `Modal`   |
| content        | Contents in Modal pop-up window         | `ReactNode` | `<></>`   |
| footer        | Dom at the bottom of Modal pop-up window         | `ReactNode`                                | ``   |
| needFooter       | Whether to render the bottom Dom of Modal         | `boolean`                                | `true`   |
| contentWidth      | Width of pop-up window   | `string/number（如果为string可以为100px或者50%,number可以为数字，单位是px）`|  `520px` |
| closable        | Whether to display the closed icon         | `boolean`                                | `true`   |
| closeIcon        | Closed icon         | `boolean`                                | `true`   |
| okButtonProps        | Determine the parameters of the button         | `ButtonProps`                                | `{}`   |
| okText        | Confirm the copy of the button         | `string`                                | `确定`   |
| cancelButtonProps     | Parameters of the cancel button         | `ButtonProps`                                  | `{}`   |
| cancelText        | Copy of cancel button         | `string`                                | `取消`   |
| destroyOnClose        | Whether to destroy Dom after closing Modal         | `boolean`                                | `false`   |
| keyboard        | Whether Modal can be closed through esc         | `boolean`                                | `true`   |
| maskClosable        | Whether Modal can be closed by clicking the mask         | `boolean`                                | `true`   |
| getContainer        | Specifies the DOM element entered by Modal rendering (not used at present, will be added later)         | `HTMLElement | false（如果是false意味着就在Modal本来的位置渲染DOM）`                       | `false`   |
| maskStyle        | Style style of the mask layer         | `CSSProperties`                                | `{}`   |
| maskClass        | The class style of the mask layer         | `string`                                | ``   |
| contentStyle        | Style style of the mask layer         | `string`                                | ``   |
| contentClass        | The class style of the mask layer         | `string`                                | ``   |
| modalRender （Pay attention to memory leaks）       | Custom pop-up window         | `(modal:ReactNode)=>ReactNode`           | ``   |
| afterClose        | Callback after Modal is completely closed         | `Function`                                | ``   |
| onOk        | Click OK to call back         | `Function`                                | ``   |
| onCancel        | Callback after clicking Cancel         | `Function`                                | ``   |



## Modal Methed API

Modal also provides some syntax sugar APIs
* `Modal.confirm` Used to pop up a dialog box
* `Mdoal.error` Used to pop up an error dialog box
* `Modal.success` Used to pop up a success dialog box
* `Modal.info` Used to pop up an information dialog box
* `Modal.warning` Used to pop up a warning dialog box 
* `Modal.method`The type field can be used to specify the above type of dialog box

Be careful
* If the Modal component is used directly, the Dom will be rendered in the original location of the Modal, while the function will be mounted in the div under the body and will be destroyed directly after closing. The getContainer has not been processed at present
* If you use the syntax sugar function to pop up Modal, it will be mounted and rendered in the outer body. render mount to dynamically create a new React entity. Its context is not the same as the context of the current code, so the context information cannot be obtained.
* If the modalRender attribute is used to pay attention to memory leaks, if the function pop-up window is used or the destroy OnClose of Modal is turned on, you should pay attention to memory leaks. You should destroy the dom directly after hiding
* Later, drag attributes and getContainer processing will be added