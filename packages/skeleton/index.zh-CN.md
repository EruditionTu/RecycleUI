---
title: Skeleton 骨架屏
nav:
  title: 组件
  path: /components
group:
  title: 反馈
---

# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

* 网络较慢，需要长时间等待加载处理的情况下。
* 图文信息内容较多的列表/卡片中。
* 只在第一次加载数据的时候使用。
* 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 基本

最简单的占位效果。

<code src='./demo/basic.tsx'/>

## 更复杂的组合

更复杂的组合。

<code src='./demo/moreUse.tsx'/>

## 动画效果

显示动画效果。

<code src='./demo/active.tsx'/>

## 图片加载骨架屏

显示图片加载时的骨架屏。

<code src='./demo/image.tsx'/>

## 头像加载骨架屏

显示头像加载时的骨架屏。

<code src='./demo/avatar.tsx'/>

## 按钮加载骨架屏

显示按钮加载的骨架屏。

<code src='./demo/button.tsx'/>

## 包含子组件

加载占位图包含子组件。

<code src='./demo/hasChildren.tsx'/>

## 列表

在列表组件中使用加载占位符。

<code src='./demo/list.tsx'/>

## API

### Skeleton API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | 是否展示动画效果         | `boolean`         | `false` |
| avatar        | 是否显示头像占位图         | `boolean\SkeletonAvatarProps`         | `false` |
| loading        | 为 true 时，显示占位图。反之则直接展示子组件         | `boolean`         | `--` |
| paragraph       | 是否显示段落占位图         | `boolean\SkeletonParagraphProps`         | `true` |
| round     | 为 true 时，段落和标题显示圆角         | `boolean`         | `false` |
| title        | 是否显示标题占位图         | `boolean\SkeletonTitleProps`         | `true` |


### Skeleton.Avatar API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | 是否展示动画效果，仅在单独使用头像骨架时生效         | `boolean`         | `false` |
| shape        | 指定头像的形状     | `boolean\SkeletonAvatarProps`         | `false` |
| size        | 设置头像占位图的大小         | `boolean`         | `--` |

### Skeleton.Title API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| width        | 设置标题占位图的宽度         | `number/string`         | `--` |

### Skeleton.Paragraph API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| rows        | 设置段落占位图的行数         | `number`         | `--` |
| width        | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度    | `number/string/Array<number/string>`         | `--` |

### Skeleton.Button API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | 是否展示动画效果         | `boolean`         | `false` |
| block        | 将按钮宽度调整为其父宽度的选项         | `boolean`         | `false` |
| shape        | 指定按钮的形状         | `circle/round/square/default`         | `--` |
| size       | 设置按钮的大小         | `large/small/default`         | `true` |

### Skeleton.Input API

| 参数        | 参数描述      | 类型                                       | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | 是否展示动画效果         | `boolean`         | `false` |
| block        | 设置输入框的大小         | `large/small/default`         | `--` |

