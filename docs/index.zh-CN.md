---
title: 通用的React组件库
full: true
gapless: true
---

<code src="./components/HomePage/index.tsx" inline="true"></code>

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './components/Section';
import './components/Section/styles.less';
export default () => (
  <Section
    title="Experience the ultimate in Recycle UI online"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/s/concis-up772x?file=/src/App.js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './components/Section';
import './components/Section/styles.less';
export default () => (
  <Section
    title="Other open source projects"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
  >
  </Section>
);
```
```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './components/Section';
import './components/Section/styles.less';
export default () => (
  <Section
    title="Questions and errors, please contact me"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 100, fontWeight: 'bold' }}
  >
  </Section>
);
```

```tsx
/**
 * inline: true
 */
import React from 'react';
import { Section } from './components/Section';
import './components/Section/styles.less';

export default () => (
  <Section
    style={{ marginTop: 140, fontWeight: 'bold',paddingBottom:50 }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <div>
      <span>Copyright © 2022-2022 Recycle UI. All Rights Reserved. Recycle UI 版权所有</span>
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noreferrer"
        style={{ color: '#1890ff' }}
      >
        苏ICP备2022018060号
      </a>
    </div>
  </Section>
);
```