import React from 'react';
import type { ReactNode } from 'react';

export default (props: { color: string; text?: string; children?: ReactNode }) => (
  <div style={{ backgroundColor: props.color, padding: '16px 0' }}>
    {props.text || props.children}
  </div>
);
