---
title: Button 按钮
nav:
  title: 组件
  path: /components
group:
  title: 通用
---

# Button 按钮

按钮用于开始一个即时操作。

## 按钮类型
最基础的按钮，共有四种类型。
* 主按钮：用于主行动点，一个操作区域只能有一个主按钮，主按钮一般为实心。
* 次按钮：用于没有主次之分的一组行动点，次按钮一般为空心。
* 文本按钮：用于最次级的行动点，是一个文本描述，没有边框背景。
* 链接按钮：一般用于链接，即导航至某位置，是一段有颜色的文本链接，没有边框背景。
<code src="./demo/type.tsx"></code>

## 不同场景的按钮
按钮如果是主按钮solid或是次按钮transparent那么会有四种场景下的按钮。
* 常规routine：最为常见的场景下的一种按钮
* 信息info：一般适用于点击获取某种信息场景下的按钮
* 危险danger：一般适用于点击会执行某种危险操作的按钮
* 警告warn：一般适用于点击会造成一些影响的操作的按钮，影响有好有坏，比danger轻一些
<code src="./demo/purpose.tsx"></code>

## 加载状态

loading 配置加载状态按钮。

<code src="./demo/loading.tsx"></code>

## 禁用按钮

disabled 配置禁止使用状态的按钮。

<code src="./demo/disabled.tsx"></code>

## 按钮形状

按钮的形状只能出现在type为solid，transparent的按钮中。

<code src="./demo/shape.tsx"></code>

## 按钮图标

<code src="./demo/icon.tsx"></code>

## 按钮组

通过 Button.Group 放入多个按钮组。

<code src="./demo/group.tsx"></code>

## Button API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| type        | 按钮类型         | `solid / transparent / text / link`         | `solid` |
| disabled    | 禁用状态         | `boolean`                                  | `false`   |
| purpose     | 按钮主题用途（仅对`solid`和`transparent`的按钮有效）   | `routine/info/danger/warn`                   | `routine`   |
| loadingProps| 加载器的属性（可以参考`Loader`组件的API） | `routine/info/danger/warn` | `routine`   |
| loading     | 加载状态         | `boolean`                                  | `false`   |
| icon        | 图标按钮（仅对`solid`和`transparent`的按钮有效）         | `ReactNode`                                | `<></>`   |
| shape        | 按钮形状 （仅对`solid`和`transparent`的按钮有效）        | `circle/rect/round`                                | `rect`   |
| onClick | 按钮点击回调事件 | `Function`                                 | `--`      |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |

## Button Group API

| 字段      | 描述 | 类型            | 默认 |
| --------- | ----------- | --------------- | ------- |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |
