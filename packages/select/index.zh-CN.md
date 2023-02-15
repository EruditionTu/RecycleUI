---
title: Select 选择器
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
---

# Select 选择器

下拉选择器。

## 何时使用

* 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。

* 当选项少时（少于 5 项），建议直接将选项平铺，使用 `Radio` 是更好的选择。

## 基本使用

<code src="./demo/basic.tsx"/>

## 禁用

<code src="./demo/disabled.tsx"/>

## 尺寸

<code src="./demo/size.tsx"/>

## 选项组

<code src="./demo/group.tsx"/>

## API

### Select API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| value        | 控制时 `select` 的值必须与 `onChange` 函数一起使用才能更新 `select` 的值         | `any`         | `--` |
| disabled    | 禁用选择器     | `boolean`                                  | `false`   |
| defaultValue      | 根据 `value` 进行比较，判断是否选中   | `any`  | `--`   |
| size     | 选择框尺寸     | `large \| default \| small`                                  | `default`   |
