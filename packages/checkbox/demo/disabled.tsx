import React from 'react';
import Checkbox from '../Checkbox';
import '../style';

export default function () {
  return (
    <>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </>
  );
}
