---
title: Loader
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Loader

Used to display the loading status of components.

## Basic use

The most basic use of the loader.

 <code src='./demo/basic.tsx' />

## Card loading  

Used in combination with cards.

<code src='./demo/withCard.tsx'/>

## Full page load

Displayed when page data is loaded.

<code src='./demo/allPage.tsx'/>

## API

| Name        | Describe      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| size        |     Load icon size  | `small|default|large`         | `default` |
| loading    |  Whether to display the loading status    | `boolean`                                  | `false`   |
| indicator      | 	Load indicator, which can load an Icon animation   | `ReactNode`                   | `--`   |
| tip     |     When used as a package element, you can customize the description text     | `string`                                  | `--`   |
| color        | 	  Set the color of icons and text       | `string`   | `--`   |
| vertical |  Icon and text display vertically  | `boolean`                                | `false`   |
| bgColor | Custom background color | `string`                                 | `--`      |
| fullScreen     | Full screen display or not  | `boolean` | `false` |