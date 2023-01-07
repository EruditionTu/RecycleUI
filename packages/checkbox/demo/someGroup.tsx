import React from 'react';
import Checkbox from '..';

const onChange = (checkedValues: any) => {
  console.log('checked = ', checkedValues);
};

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const App: React.FC = () => (
  <div style={{ fontSize: 0 }}>
    <Checkbox.Group
      group={options}
      defaultValue={['Pear']}
      onChange={onChange}
      style={{ marginBottom: '3px' }}
    />
    <br />
    <Checkbox.Group
      group={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </div>
);

export default App;
