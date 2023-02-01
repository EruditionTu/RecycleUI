---
title: Skeleton 
nav:
  title: Components
  path: /components
group:
  title: Feedback
---


# Skeleton 

Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.

## When To Use

* When a resource needs long time to load.
* When the component contains lots of information, such as List or Card.
* Only works when loading data for the first time.
* Could be replaced by Spin in any situation, but can provide a better user experience.

## Basic

Simplest Skeleton usage.

<code src='./demo/basic.tsx'/>

## Complex combination

Complex combination with avatar and multiple paragraphs.

<code src='./demo/moreUse.tsx'/>

## Active Animation

Display active animation.

<code src='./demo/active.tsx'/>

## Picture loading skeleton screen

Displays the skeleton screen when the picture is loaded.

<code src='./demo/image.tsx'/>

## Head portrait loading skeleton screen

Displays the skeleton screen when the avatar is loaded.

<code src='./demo/avatar.tsx'/>

## Button loading skeleton screen

Displays the skeleton screen loaded by the button.

<code src='./demo/button.tsx'/>

## Include subcomponents

The load occupation bitmap contains sub-components.

<code src='./demo/hasChildren.tsx'/>

## List

Use load placeholders in list components.

<code src='./demo/list.tsx'/>

## API

### Skeleton API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | Show animation effect         | `boolean`         | `false` |
| avatar        | Show avatar placeholder         | `boolean\SkeletonAvatarProps`         | `false` |
| loading        | Display the skeleton when true | `boolean`         | `--` |
| paragraph       | Show paragraph placeholder| `boolean\SkeletonParagraphProps`         | `true` |
| round     | Show paragraph and title radius when true | `boolean`         | `false` |
| title        | Show title placeholder  | `boolean\SkeletonTitleProps`         | `true` |


### Skeleton.Avatar API

| Name        |Description     | Type                                     | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | Show animation effect, only valid when used avatar independently         | `boolean`         | `false` |
| shape        | Set the shape of avatar     | `boolean\SkeletonAvatarProps`         | `false` |
| size        | Set the size of avatar | `boolean`         | `--` |

### Skeleton.Title API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| width        | Set the width of title         | `number/string`         | `--` |

### Skeleton.Paragraph API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| rows        | Set the row count of paragraph        | `number`         | `--` |
| width        | Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width    | `number/string/Array<number/string>`         | `--` |

### Skeleton.Button API

| Name       | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | Show animation effect         | `boolean`         | `false` |
| block        | Option to fit button width to its parent width         | `boolean`         | `false` |
| shape        | Set the shape of button         | `circle/round/square/default`         | `--` |
| size       | 	Set the size of button         | `large/small/default`         | `true` |

### Skeleton.Input API

| Name        | Description      | Type                                       | Default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| active        | Show animation effect         | `boolean`         | `false` |
| block        | Set the size of input         | `large/small/default`         | `--` |

