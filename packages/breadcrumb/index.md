---
title: Breadcrumb 
nav:
  title: Components
  path: /components
group:
  title: Navigation
---

# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## When To Use

* When the system has more than two layers in a hierarchy.
* When you need to inform the user of where they are.
* When the user may need to navigate back to a higher level.

## Basic

The simplest use.

<code src='./demo/basic.tsx' />

## With an Icon

The icon should be placed in front of the text.

<code src='./demo/withIcon.tsx'/>

## Configuring the Separator

The separator can be customized by setting the separator property: `separator=">"`.

<code src='./demo/customSeq.tsx'/>

## Bread crumbs with drop down menu

Breadcrumbs support drop down menu.


## Breadcrumb API

| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | ClassName style of Breadcrumb         | `string`         | `<></>` |
| style    | ClassName style of Breadcrumb        | `CSSProperties`                                  | ``   |
| separator	      | The separator of each item in Breadcrumb   | `ReactNode`                   | `/`   |

## Breadcrumb.Item API

| Name      | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| className        | ClassName style of Breadcrumb.Item         | `string`         | `<></>` |
| style    | The style of Breadcrumb.Item         | `CSSProperties`                                  | ``   |
| href	      | Linked Address   | `string`                   | ``   |
| separator	      |  Breakcrunch. Item is the separator of the previous one  | `ReactNode`                   | `/`   |
| dropdownProps	      |  Breakcrunch. Item is the separator of the previous one  | ``                   | ``   |
| menu	      |  Menu item configuration  | ``                   |   ``   |