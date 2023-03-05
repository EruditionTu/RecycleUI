import React from 'react';
import Checkbox from '../Checkbox';

export default function () {
  return (
    <>
      <Checkbox defaultChecked={false} disabled />
      <br />
      <Checkbox defaultChecked disabled />
    </>
  );
}
