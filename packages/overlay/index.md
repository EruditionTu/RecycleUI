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

## Custom mount node

If the 'usePortal' attribute is true, you can use containerDom to mount the overlay component under the specified dom node.

<code src='./demo/customContainer.tsx' />

## API

| Name        | Describe      | Type                                       | default   |
| ----------- | ---------------- | ------------------------------------------ | --------- |
| open        | Whether the pop-up window is visible         | `boolean`         | `false` |
| usePortal    | Whether to use the react16 scheme Portal to generate the modal dialog box outside the root node         | `boolean`                                  | `true`   |
| containerDom      | The dialog box generates the dom node mounted outside the node   | `HTMLElemet`                   | `document.body`   |
| maskClosable     | Click whether the covering layer can be closed         | `boolean`                                  | `true`   |
| portalProps        | Set Portal Component Properties         | `{container?:HTMLElement}`（At present, there is only one attribute, and other attributes may be added later😂）   | `{}`   |
| backdropProps | Mask Layer HTML Attribute Settings    | `HTMLAttributes`                                | `{}`   |
| dialogProps | Button Click Callback Event | `HTMLAttributes`                                 | `{}`      |
| unmountOnExit     | Exit Animation Unload Component  | `CSSProperties` | `{}`    |
| hasBackdrop |Whether there is a background, whether to add a style to<body> `recycle-ui-overlay-open ` Prevent scrollbars from appearing | `boolean`        |`true` |
| transitionName | `transitionName`can be imported as a field of' classNames' of `react-transition-group`, and customized animation  | `string`   | `--`  |
| timeout | Animation execution time        | `number`        | `300`    |
| onClose | Click the mask layer callback function, and set open=false to close through this function. OnClosed is a callback function after the pop-up box closes the animation. There are obvious differences and it is easy to confuse. | `Function`        | `--`    |
| onEnter	 | In order 1, the `CSSTransition` callback is triggered immediately after the application of enter or appearance.        | `Function`        | `--`    |
| onOpening | Sequence 2, ** Open ** Execute immediately, and trigger the `CSSTransition` callback immediately after the application of the enter active or appearance active class。| `Function`        | `--`    |
| onOpened	 | Sequence 3: ** Open ** The animation is played and executed, and the callback is started before the exiting status is applied。  | `Function`        | `--`    |
| onClosing	 | Sequence 4: ** Close ** Execute immediately, and trigger the `CSSTransition` callback immediately after applying exit active。    | `Function`        | `--`    |
| onClosed	 | 	Sequence 5: ** Close ** The animation will be executed immediately after playing. After deleting the exit class, the `CSSTransition` callback will be triggered immediately, and the exit done class will be added to the DOM node.  | `Function`        | `--`    |

It supports the transmission of `CSSTransition` native events.