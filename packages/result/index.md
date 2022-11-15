---
title: Result
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Result

Used to feed back the results of a series of operational tasks.

## When To Use

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## Success

Show successful results.

<code src="./demo/success.tsx"/>

## Info

Show processing results.

<code src="./demo/info.tsx"/>

## Warn

The result of the warning.

<code src="./demo/warn.tsx">

## 403

you are not authorized to access this page.

<code src="./demo/cannotAccess.tsx">

## 404

The page you visited does not exist.

<code src="./demo/notFound.tsx"/>

## 500

Something went wrong on server.

<code src="./demo/serverError.tsx"/>

## Error

Complex error feedback.

<code src="./demo/error.tsx"/>

## Custom Icon

Custom icon.

<code src="./demo/custom.tsx"/>

## API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| extra | Operating area | ReactNode | - |
| icon | Custom back icon | ReactNode | - |
| status | Result status, decide icons and colors | `success` \| `error` \| `info` \| `warning` \| `404` \| `403` \| `500` | `info` |
| subTitle | The subTitle | ReactNode | - |
| title | The title | ReactNode | - |