---
title: List
nav:
  title: Components
  path: /components
group:
  title: Data display
---

# List

Simple List.

## When To Use

A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size.

## Basic Usage

<code src="./demo/basic.tsx" />

## Special Usage

<code src="./demo/teshu.tsx"/>

## Disable Row

<code src="./demo/disabledRow.tsx" />

## Row activation

<code src="./demo/activeRow.tsx"  />

## zebra crossing

<code src="./demo/banma.tsx" />

## List as Hyperlink

<code src="./demo/link.tsx"/>

## Show additional content

<code src="./demo/extra.tsx"/>

## API

### List API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| size | Set the row size, big, medium and small | `small \| default \| large` | `deafult` |
| bordered | Show border or not | `boolean` | `true` |
| noHover | Cancel the border shadow when the mouse moves |`boolean`| `false` |
| active | Active list, mouse over border shadow effect | `boolean` | `false` |
| striped | Zebra effect | `boolean` | `false` |
| footer | Bottom of list | `ReactNode` | `--` |
| header | List header | `ReactNode` | `--` |
| dataSource | List data source | `Array[]` | `--` |
| renderItem | Return Dome through the callback function and render each row of the list | `Function(item,index)` | `--` |

### List.Item API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| active | activation | `small \| default \| large` | `deafult` |
| extra | Additional content, show the content on the right | `boolean` | `true` |
| disabled | forbidden |`boolean`| `false` |
| tagName | Set the label name of the child node. The default label is`<div/>`. You can also specify the route`<Link/>` | `string` | `div` |
| href | Specify the target of the link. When the value exists and the tagName is String, it is a hyperlink. The value of href added to the hyperlink is the href value you pass in. At this time, you can set all attributes of the tag `<a>`. | `boolean` | `false` |