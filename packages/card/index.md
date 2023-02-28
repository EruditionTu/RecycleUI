---
title: Card
nav:
  title: Components
  path: /components
group:
  title: Data display
---

# Card

Simple rectangular container.

## When To Use

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## Basic Usage

<code src='./demo/basic.tsx'/>

## No border

<code src="./demo/noBorder.tsx" />

## Simple card

<code src="./demo/easy.tsx" />

## Card in column

在系统概览页面常常和栅格进行配合。

<code src="./demo/grid.tsx" />

## API

### Card API

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| actions     | The action list, shows at the bottom of the Card  | `Array<ReactNode>` | `[]`    |
| bodyStyle | Inline style to apply to the card content	       | `CSSProperties`        | `--`    |
| border | 	Toggles rendering of the border around the card        | `boolean`        | `true`    |
| cover | Card cover       | `ReactNode`        | `--`    |
| extra | Content to render in the top-right corner of the card    | `ReactNode`        | `--`    |
| headStyle | Inline style to apply to the card head | `CSSProperties`        | `{}`    |
| hoverable | Lift up when hovering card | `boolean`        | `false`    |
| loading | Shows a loading indicator while the contents of the card are being fetched | `boolean` | `--`    |
| size | Size of card	 | `default \| small`        | `default-`    |
| title | Card title   | `ReactNode`        | `--`    |
