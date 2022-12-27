---
title: Switch 开关
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Switch 开关

开关选择器。

## 何时使用

* 需要表示开关状态/两种状态之间的切换时；
* 和 `checkbox` 的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本使用

最简单的用法。

<code src='./demo/basic.tsx'/>

## 不可用

Switch 失效状态。

<code src='./demo/disabled.tsx' />

## 开启和关闭状态的文字

带有开启和关闭状态下的文字提示。

<code src='./demo/textAndIcon.tsx' />

## 尺寸

size="small" 表示小号开关，size="large"表示大号开关，size="default"表示默认中等大小。

<code src='./demo/size.tsx'/>

## 加载中

标识开关操作仍在执行中。

<code src='./demo/loader.tsx' />

## API

| 参数      | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | switch标签的样式类         | `string`         | `--` |
| style    | switch标签的style样式         | `CSSProperties`               | `{}`   |
| label        | switch的文本描述         | `ReactNode`         | `--` |
| size    | switch的大小控制         | `large|default|small`               | `default`   |
| checked	      | 指定当前是否选中   | `boolean`                   | `false`   |
| defaultChecked     | 初始是否选中         | `boolean`          | `false`|
| disabled        | 是否禁用       | `boolean` | `false`   |
| checkedChildren | 选中时的内容 | `ReactNode`   | `--`      |
| unCheckedChildren    | 非选中时的内容  | `ReactNode` | `--`    |
| loading     | 加载中的开关  | `boolean` | `false`    |
| onClick     | 点击时的回调函数  | `(checked?: boolean, event?: MouseEvent<HTMLElement>) => void` | `--`    |
| onChange     | 变化时的回调函数  | `(checked?: boolean) => void` | `--`    |
