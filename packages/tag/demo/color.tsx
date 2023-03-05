import React from 'react';
import type { MouseEvent } from 'react';
import Tag from '..';
import Divider from '../../divider';


const close = (e: MouseEvent<HTMLElement>) => {
  alert('关闭tag');
};

const preventDefault = (e: MouseEvent<HTMLElement>) => {
  e.preventDefault();
  alert('禁止关闭tag');
};

export default () => (
  <>
    <div>
      <Tag title="成功-绿色" effect="dark" color="#28a745" closable onClose={close} />
      <Tag title="主要-蓝色" effect="dark" color="#008EF0" closable onClose={preventDefault} />
      <Tag title="信息-青色" effect="dark" color="#1EABCD" />
      <Tag title="导航-藏青" effect="dark" color="#393E48" />
      <Divider />
      <Tag effect="dark" color="#ffc107" closable onClose={close}>
        警告-黄色
      </Tag>
      <Tag effect="dark" color="#F95C2B" closable onClose={preventDefault}>
        提醒-橙色
      </Tag>
      <Tag effect="dark" color="#dc3545">
        危险-红色
      </Tag>
      <Tag effect="dark">默认-颜色</Tag>
      <Divider />
      <Tag effect="light" color="#28a745" closable onClose={close}>
        成功-绿色
      </Tag>
      <Tag effect="light" color="#008EF0" closable onClose={preventDefault}>
        主要-蓝色
      </Tag>
      <Tag effect="light" color="#1EABCD">
        信息-青色
      </Tag>
      <Tag effect="light" color="#393E48">
        导航-藏青
      </Tag>
      <Divider />
      <Tag effect="light" color="#ffc107" closable onClose={close}>
        警告-黄色
      </Tag>
      <Tag effect="light" color="#F95C2B" closable onClose={preventDefault}>
        提醒-橙色
      </Tag>
      <Tag effect="light" color="#dc3545">
        危险-红色
      </Tag>
      <Tag effect="light">默认-颜色</Tag>
    </div>
  </>
);
