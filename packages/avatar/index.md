---
title: Avatar
nav:
  title: Components
  path: /components
group:
  title: Data display
---

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or letters.

## Basic Usage

The head portrait has four sizes and two shapes are available.

<code src="./demo/basic.tsx" />

## Other types

Three types are supported: Icon and character. Icon and character can customize icon color and background color.

<code src="./demo/other.tsx" />

## Picture support

Use the onError event on the component to handle the picture showing the error.

<code src="./demo/image.tsx" />

## API

### Avatar API

| Name        | Description      | Type         | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| icon        | Set the icon type of the avatar   | `ReactNode`  | `--` |
| shape    | Specify the shape of the avatar `square` or `circle` | `square \| circle`| `circle`|
| size      |  Set the size of the avatar  | `large \| small \| mini \|default` | `default`   |
| src     |  Resource address of picture avatar  |               `string`| `--`   |
| alt        |  Specify alternate text for images | `string`  | `--`   |
| onError        |     If the image fails to load, returning false will turn off the default fallback behavior of the component     | `()=>void`  | `--`   |
