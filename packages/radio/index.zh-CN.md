---
title: Radio 单选
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Radio 单选

单选框。

## 何时使用

* 用于在多个备选项中选中单个状态。
* 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基础使用

最简单的用法。

<code src='./demo/basic.tsx'/>

## 不可用

Radio不可用。

<code src='./demo/disabled.tsx'/>

# 单选组合

一组互斥的 Radio 配合使用。

<code src='./demo/radioGroup.tsx'/>

## Radio.Group 组合 - 配置方式

通过配置 `options` 参数来渲染单选框。也可通过 `optionType` 参数来设置 Radio 类型。

<code src='./demo/radioGroupOption.tsx'/>

## 按钮样式

按钮样式的单选组合。

<code src='./demo/radioButtonStyle.tsx'/>

## 单选组合 - 配合 name 使用

可以为 `Radio.Group`配置 `name` 参数，为组合内的 `input` 元素赋予相同的 `name` 属性，使浏览器把 `Radio.Group` 下的 `Radio` 真正看作是一组（例如可以通过方向键始终在同一组内更改选项）。

<code src='./demo/radioWithName.tsx' />

## 大小

大中小三种组合，可以和表单输入框进行对应配合。

<code src='./demo/radioSize.tsx' />

## 镂空的RadioButton

镂空的RadioButton样式。

<code src='./demo/radioButtonOutline.tsx'/>

## Radio API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| onCheckChange        | 当Radio选中状态发生变化的回调         | `(nextChecked: boolean) => void`         | `` |
| size    | Radio的大小         | `small、default、large`                                  | `default`   |
| checked      | 当前Radio是否选中   | `boolean`                   | `false`   |
| defaultChecked     | 当前Radio初始的选择状态         | `boolean`                                  | `false`   |
| value        | Radio的值         | `any`   | ``   |
| className | Radio的className    | `string`           | ``   |
| style | Radio的style样式 | `CSSProperties`                   | `{}`      |

## Radio.Button API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| onCheckChange        | 当Radio选中状态发生变化的回调         | `(nextChecked: boolean) => void`         | `` |
| size    | Radio的大小         | `small、default、large`                                  | `default`   |
| checked      | 当前Radio是否选中   | `boolean`                   | `false`   |
| defaultChecked     | 当前Radio初始的选择状态         |`boolean`                                  | `false`   |
| value        | Radio的值         | `any`   | ``   |
| className | Radio的className    | `string`           | ``   |
| style | Radio的style样式 | `CSSProperties`                   | `{}`      |
| buttonStyle | Radio.Button的样式，看是镂空还是实底的 | `solid、outline`                   | `solid`      |


## Radio.Group API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| value        | Radio.Group当前选中的值         | `any`         | `` |
| defaultValue    | Radio.Group初次默认选中的值         | `any` | ``   |
| buttonStyle      | Radio.Group中Radio.Button的样式，镂空还是实底   |     `solid、outline`                   | `solid`   |
| disabled     | Radio.Group中的Radio是否可用         |   `boolean`                                  | `false`   |
| name        | RadioGroup 下所有 `input[type="radio"]` 的 name 属性        |  `string`   | ``   |
| options | 	以配置形式设置子元素    |  `Array<{ label: ReactNode; value: string; disabled?: boolean; }>、string[]`  |   `` |
| optionType | 用于设置 Radio options 类型 | `default、button`                   |    `default`      |
| size |Radio的大小 | `small、default、large`                   |    `default`      |
| onValueChange | Radio.Group所选中的值发生变化时的回调函数 |   `(value: any) => void`                   | ``      |
| onChange | Radio.Group下面的Radio的onChange的回调函数 |   `(e: ChangeEvent<HTMLInputElement>) => void`                   | ``      |