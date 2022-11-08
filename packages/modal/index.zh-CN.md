---
title: Modal 弹窗
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---
# Modal

## 基本使用

<code src="./demo/basic.tsx"></code>

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