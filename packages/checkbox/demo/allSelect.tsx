import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import Checkbox from '..';

export default function TimePickerDemo1() {
  const [checkAll, setCheckAll] = useState(false);
  const [checkGroup, setCheckGroup] = useState([
    {
      label: 'Apple',
      value: 1,
    },
    {
      label: 'Peer',
      value: 2,
      checked: true,
    },
    {
      label: 'Orange',
      value: 3,
    },
  ]);
  const checkCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckAll(e.target.checked);
    const oldCheckGroup = [...checkGroup];
    oldCheckGroup.forEach((item) => {
      item.checked = e.target.checked;
    });
    setCheckGroup(oldCheckGroup as any);
  };
  return (
    <>
      <Checkbox checked={checkAll} onChange={checkCallback} style={{ padding: '5px 0' }}>
        全选
      </Checkbox>
      <p />
      <Checkbox.Group group={checkGroup} style={{ padding: '5px 0' }} />
    </>
  );
}
