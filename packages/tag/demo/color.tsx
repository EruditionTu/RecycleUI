import React from 'react';
import Tag from '..';
import '../style';

export default () => (
  <>
    <Tag color="red" closable>
      Tag 1
    </Tag>
    <Tag effect="dark" closable>
      <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
    </Tag>
    <Tag closable effect="dark" color="green">
      Tag 2
    </Tag>
  </>
);
