---
title: Virtual Scroller 虚拟列表
nav:
  title: 组件
  path: /components
group:
  title: 通用
---

# Virtual Scroller

大数据量的列表。

## 何时使用

当列表中数据量非常大的情况下，浏览器渲染的代价很高，可以考虑使用虚拟列表。

## 水平虚拟列表

<code src="./demo/horizontal.tsx"/>

## 竖直虚拟列表 

<code src="./demo/vertical.tsx" />

## API

### Virtual-Scroller API

| 参数        | 参数描述      | 类型 | 默认   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| width| 虚拟列表可视窗口的宽度 | `number`         | `400` |
| height |虚拟列表可视窗口的高度| `number`         | `400` |
| itemCount| 虚拟列表的列表数量 | `number` | `--` |
| renderItem       |虚拟列表渲染函数| `Function`         | `--` |
| itemSize       |列表项的大小| `Function|number`         | `--` |
| scrollDirection       |虚列表的渲染方向| `string`         | `--` |
| scrollOffset  |虚列表的滚动大小| `Number`         | `--` |
| scrollToIndex |虚拟列表滚动到当前下标| `Number`         | `--` |
| scrollToAlignment       |虚拟列表滚动到scrollToIndex下标，scrollToIndex在可视窗口中央 | `start \| center \| end \| auto`         | `start` |
| overscanCount       |缓冲区数量| `Number`         | `--` |
| estimatedItemSize       |估算每个列表项的大小| `Number`         | `--` |
| onItemRendered       |渲染列表项的回调函数| `Function`         | `--` |
| onScroll       |虚列表滚动回调| `Function`         | `--` |




