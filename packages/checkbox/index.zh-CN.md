---
title: Checkbox 多选框
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Checkbox 多选框

多选框。

## 何时使用

* 在一组可选项中进行多项选择时；
* 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本用法

简单的checkbox。

<code src='./demo/basic.tsx'/>

## 不可用

checkbox 不可用。

<code src='./demo/disabled.tsx'/>

## Checkbox组

方便的从数组生成 Checkbox 组。

<code src='./demo/someGroup.tsx'/>

## 受控的Checkbox

联动的checkbox。

<code src='./demo/beHandled.tsx' />

## 全选

实现全选效果。

<code src='./demo/allSelect.tsx'/>

## Checkbox API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| name        | `input[type="checkbox"]` 的 name 属性         | `string`         | `--` |
| value    | `input[type="checkbox"]` 的 value 属性         | `any`| `--`   |
| checked      | 指定当前是否选中   | `boolean`  | `false`   |
| defaultChecked     | 初始是否选中       | `boolean`    | `false`   |
| disabled        | checkbox是否失效         | `boolean`   | `false`   |
| onCheckedChange | checkbox的选中状态发生变化时的回调函数    | `function(e:boolean)`           | `--`   |
| onChange | 变化时的回调函数，等同于Input的原生事件 | `funciton(ChangeEvent<HTMLInputElement>)`                   | `--`      |

## Checkbox.Group API

| 参数        | 参数描述      | 类型   | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| name        | `Checkbox.Group` 下所有 `input[type="checkbox"]` 的 `name` 属性 | `string`         | `--` |
| value    | 指定选中的选项 | `Array<any>` | `[]`   |
| group      | 指定可选项   | `Array<CheckboxProps>` | `[]`   |
| defaultValue     |默认选中的选项| `Array<any>`| `[]`   |
| disabled | 整组失效 | `boolean`   | `false`   |
| onValueChange | `Checkbox.Group`选择状态发生变化时的回调 | `(value: Array<any>) => void` | `--`|

