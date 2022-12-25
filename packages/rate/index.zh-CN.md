---
title: Rate 评分
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Rate 评分

评分组件。

## 何时使用

* 对评价进行展示。
* 对事物进行快速的评级操作。

## 基础使用

最简单的用法。

<code src='./demo/basic.tsx'/>

## 半星

支持选中半星。

<code src='./demo/half.tsx' />


## 文案展现

给评分组件加上文案展示。

<code src='./demo/text.tsx'/>

## 只读

只读，无法进行鼠标交互。

<code src='./demo/readonly.tsx'/>

## 清除

支持允许或者禁用清除。

<code src='./demo/allowClear.tsx'/>

## 其他字符

可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。

<code src='./demo/other.tsx' />

## 自定义字符

可以使用 `(index:number) => ReactNode` 的方式自定义每一个字符。

<code src='./demo/custom.tsx' />

## API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| allowClear        | 是否允许再次点击后清除         | `boolean`         | `false` |
| allowHalf    | 是否允许半选         | `boolean`                                  | `false`   |
| count      | star 总数   | `number`                   | `5`   |
| defaultValue     | 默认值         | `number`                                  | ``   |
| value        | 当前数，受控值         | `number`   | ``   |
| tooltips | 自定义每项的提示信息    | `string[] | string`           | ``   |
| readonly | 只读，无法进行交互 | `boolean`                   | `false`      |
| character     | 自定义字符  | `ReactNode | ((index: number) => ReactNode)` | `<StarFilled />`    |
| onChange | 	数值改变时的回调，传递当前值 | `(value: number) => void`        |`` |
| onHoverChange | 鼠标经过时数值变化的回调  | `(value: number) => void`   | ``  |
| style | 	自定义样式对象 | `CSSProperties`        |`{}` |
| className | 自定义样式类名  | `string`   | ``  |
