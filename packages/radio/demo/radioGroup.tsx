import React, { useState } from 'react';
import Radio from '..';

const App: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e.target.value, typeof e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group value={value} onChange={onChange} name="tubowen">
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
};

export default App;
