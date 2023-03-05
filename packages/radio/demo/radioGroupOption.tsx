import React, { useState, ChangeEvent } from 'react';
import Radio from '..';

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const App: React.FC = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');

  const onChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('radio1 checked', e.target.value);
    setValue1(e.target.value);
  };

  const onChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('radio2 checked', e.target.value);
    setValue2(e.target.value);
  };

  const onChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('radio3 checked', e.target.value);
    setValue3(e.target.value);
  };

  const onChange4 = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('radio4 checked', e.target.value);
    setValue4(e.target.value);
  };

  return (
    <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} value={value3} onChange={onChange3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        size="small"
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  );
};

export default App;
