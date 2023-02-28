---
title: Virtual Scroller
nav:
  title: Components
  path: /components
group:
  title: Common
---

# Virtual Scroller

A list of large amounts of data.

## When To Use

When the amount of data in the list is very large, the browser rendering cost is very high, so you can consider using a virtual list.

## Horizontal virtual list

<code src="./demo/horizontal.tsx"/>

## Vertical virtual list

<code src="./demo/vertical.tsx" />

## API

### Virtual-Scroller API

| Name        | Description      |Type | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| width| Width of the virtual list visual window | `number`         | `400` |
| height | Height of the visual window of the virtual list | `number`         | `400` |
| itemCount| Number of virtual lists | `number` | `--` |
| renderItem | Virtual List Rendering Function | `Function`         | `--` |
| itemSize       | List item size | `Function|number`         | `--` |
| scrollDirection| Rendering direction of virtual list | `string`         | `--` |
| scrollOffset  | Scrolling size of virtual list | `Number`         | `--` |
| scrollToIndex | Scroll the virtual list to the current subscript | `Number`         | `--` |
| scrollToAlignment       | Scroll the virtual list to the subscript of scrollToIndex, which is in the center of the visual window | `start \| center \| end \| auto`         | `start` |
| overscanCount       | Number of buffers | `Number`         | `--` |
| estimatedItemSize       | Estimate the size of each list item | `Number`         | `--` |
| onItemRendered       | Callback function for rendering list items | `Function`         | `--` |
| onScroll       | Virtual list scroll callback | `Function`         | `--` |




