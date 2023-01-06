import React from 'react';
import Checkbox from '..';

export default function TimePickerDemo1() {
  //   const checkGroup = [
  //     {
  //       label: 'Apple',
  //       value: 1,
  //     },
  //     {
  //       label: 'Peer',
  //       value: 2,
  //       checked: true,
  //     },
  //     {
  //       label: 'Orange',
  //       value: 3,
  //       disabled: true,
  //     },
  //   ];
  //   const checkGroupCallback = (result: Array<object>) => {
  //     console.log(result);
  //   };
  return (
    <Checkbox.Group style={{ padding: '5px 0' }}>
      <Checkbox value={1}>Apple</Checkbox>
      <Checkbox value={2}>Peer</Checkbox>
      <Checkbox value={3}>Orange</Checkbox>
    </Checkbox.Group>
  );
}
