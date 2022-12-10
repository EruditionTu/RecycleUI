---
title: Overlay
nav:
  title: Components
  path: /components
group:
  title: Feedback
---

# Overlay

A basic pop-up component, and other components like Tooltip, Dawer, Alert, etc. are all derived from the encapsulation of this component.

## When to use

When the pop-up window provided by the component library can no longer meet the development needs, you can modify it through the basic pop-up window provided.

## Basic Use

<code src='./demo/basic.tsx'/>

## Customize pop-up content

<code src='./demo/custom.tsx'>

## It is mounted under the root node body by default

`usePortal 'attribute can control whether the component uses Portal to generate nodes outside the root node.

<code src='./demo/portal.tsx'/>

## Custom Animation

The animation of this component is encapsulated by the 'react-transition-group' component. You can define the animation of pop-up window through the attribute 'transitionName'. For details, you can view the usage of 'react-transition-group'，https://github.com/reactjs/react-transition-group。

<code src='./demo/customAnimation/customAnimation.tsx' />

``` less
@animation-prefix:~'animation-flipX';
@native-prefix:~'recycle-ui-overlay';
.@{animation-prefix}-enter .@{native-prefix}-backdrop {
  opacity: 0.01;
}
.@{animation-prefix}-enter-active .@{native-prefix}-backdrop {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.@{animation-prefix}-exit .@{native-prefix}-backdrop {
  opacity: 1;
}
.@{animation-prefix}-exit-active .@{native-prefix}-backdrop {
  opacity: 0.01;
  transition: opacity 1s ease-in;
}
.@{animation-prefix}-enter-active .@{native-prefix}-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipInX;
}
.@{animation-prefix}-exit-active .@{native-prefix}-content {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: flipOutX;
}

.@{animation-prefix}-enter,
.@{animation-prefix}-enter-done,
.@{animation-prefix}-exit {
  display: inherit;
}

@keyframes flipOutX {
  0% { transform: perspective(400px); }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes flipInX {
  0% {
    transform: perspective(400px) rotateX(90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateX(-5deg);
  }
  to { transform: perspective(400px); }
}

```