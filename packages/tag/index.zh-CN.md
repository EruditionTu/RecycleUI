---
title: Tag 标签
nav:
  title: 组件
  path: /components
group:
  title: 通用
---
# Tag 标签

进行标记和分类的小标签。

## 何时使用

* 用于标记事物的属性和维度。
* 进行分类。

## 基础使用

基本标签的用法，可以通过添加 closable 变为可关闭标，可关闭标签具有 onClose 事件，color。

<code src='./demo/basic.tsx'/>

## 多彩标签

我们添加了多种预设色彩的标签样式，用作不同场景使用。

如果预设值不能满足你的需求，可以设置为具体的色值。

（其实并没有😂，preset样式之后会作为一个feature补上，控制标签的样式主要依赖color字段和effect字段😈）

<code src='./demo/color.tsx'/>

## 图标按钮

当需要在 `Tag` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Tag` 内使用 `Icon` 组件。

如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性.

<code src='./demo/icon.tsx'/>

## 可选择标签

可通过 `CheckableTag` 实现类似 `Checkbox` 的效果，点击切换选中效果

<code src='./demo/checkable.tsx'/>

## Tag API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | tag标签的样式类         | `string`         | `` |
| style    | tag标签的style样式         | `CSSProperties`               | `{}`   |
| closable        | tag是否可关闭         | `boolean`         | `false` |
| disabled    | tag是否可用         | `boolean`               | `true`   |
| icon	      | tag的icon图标   | `ReactNode`                   | `<></>`   |
| closeIcon     | tag的关闭图标（只在closeable为真的情况下有用）         | `ReactNode`          | `<></>`|
| color        | tag的颜色，配合effect可以控制tag的样式       | `string` | `--`   |
| visible | 控制tag是否可见 | `boolean`   | `true`      |
| title     | tag标签内显示的文本节点  | `ReactNode` | `--`    |
| size     | tag的大小  | `small|default|large` | `default`    |
| effect     | tag的模式，深色或者浅色  | `light|dark` | `light`    |
| onClose     | tag标签关闭时的回调函数（只在closeable为真的情况下有用）  | `(event: MouseEvent<HTMLElement>) => void` | `--`    |

## CheckableTag API
| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| size       | 可选标签的大小  |       `small|default|large`       |    `default`    |
| checked    | 当前标签是否被选中     |   `boolean`     | `false`   |
| onChange   | 可选标签选中状态发生改变的回调 | `(checked: boolean) => void`  | ``   |
| className        | 可选标签的样式类         | `string`         | `` |
| style    | 可选标签的style样式         | `CSSProperties`               | `{}`|