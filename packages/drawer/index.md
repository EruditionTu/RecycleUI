---
title: Drawer
nav:
  title: Components
  path: /components
group:
  title: Feedback
---


# Drawer

A panel which slides in from the edge of the screen.

## When To Use 

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.

* Use a Form to create or edit a set of information.

* Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.

* When the same Form is needed in multiple places.

## Basic usage

<code src="./demo/basic.tsx"/>

## Display location

<code src="./demo/position.tsx"/>

## Add footer

<code src="./demo/footer.tsx"/>



## API


### Drawer API

| Name       | Description                                          |    Type   |    Default    |
| ----------- | -------------------------------------------- |----------|----------|
| title | Drawer title    |`string` |  `--`  |
| icon    | Icon in the upper right corner of the setting dialog box                                  |`ReactNode` |  `--`  |
| isOpen  | Visible or not  | `boolean` |`false`|
| closable | Whether to display the close button in the upper right corner       |`boolean` |  `true`  |
| placement    | Direction of drawer      |`top \| bottom \| left \| right` |  `right`  |
| size  | height/width，When `placement` is  `top` or `bottom` ,`size` mean `height`, Otherwise, set the width  |`number`|`--`|
| bodyProps  | Parameter style object of drawer filling content, such as `className`,`style`, etc   |`Object`|`{}`|