---
title: Pagination 
nav:
  title: Components
  path: /components
group:
  title: Navigation
---

# Pagination

A long list can be divided into several pages using `Pagination`, and only one page will be loaded at a time.

## When To Use

* When it will take a long time to load/render all items.
* If you want to browse the data by navigating through pages.

## Basic usage

<code src="./demo/basic.tsx"/>

## Mini Pagination

<code src="./demo/mini.tsx"/>

## Align

At present, there are three alignment methods: `left`, `center` and `right`.

<code src='./demo/align.tsx'/>

## API

### Pagination API

| Name | Description | Type   | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| current        | Current page number, selected page number | `number`         | `1` |
| total   | Total data  | `number`  | `1`   |
| pageSize  | Number of pieces per page | `number`         | `0` |
| pageSizeOptions    | Specify how many items can be displayed per page  | `number` | `10`   |
| divider	      | Whether there is space between page numbers | `boolean` | `false`   |
| size     |  When it is `small`, it is small size paging   | `small \| default`  | `default`|
| alignment        | alignment   | `left \| center \| right` | `left`   |
| onChange | Callback of page number change, return the changed page number | `Function(current, total, pageSize)`   | `--`      |
| pageSizeOptions     |  `PageSize` Change callback | `Function(current, pageSize)` | `--`    |