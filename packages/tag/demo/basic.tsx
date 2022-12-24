import React from 'react';
import Tag from '..';
import '../style';

const close = () => {
  alert('关闭tag');
};

const preventDefault = (e: any) => {
  e.preventDefault();
  alert('禁止关闭tag');
};

export default () => (
  <>
    <Tag closable onClose={close}>
      Tag 1
    </Tag>
    <Tag closable effect="dark" onClose={preventDefault}>
      Tag 2
    </Tag>
  </>
);
