import React from 'react';
import type { MouseEvent } from 'react';
import Tag from '..';
import '../style';

const log = (e: MouseEvent<HTMLElement>) => {
  console.log(e);
};

const preventDefault = (e: MouseEvent<HTMLElement>) => {
  e.preventDefault();
  console.log('Clicked! But prevent default.');
};

export default () => (
  <>
    <Tag disabled>Tag 1</Tag>
    <Tag disabled>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closable disabled onClose={log}>
      Tag 2
    </Tag>
    <Tag closable onClose={preventDefault}>
      Prevent Default
    </Tag>
  </>
);
