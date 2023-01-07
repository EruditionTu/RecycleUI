import React, { useState } from 'react';
import Button from '../../button';
import Checkbox from '../../checkbox';
import '../style';
import '../../button/style';

const App: React.FC = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e: any) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

  return (
    <div style={{ fontSize: 0 }}>
      <div style={{ marginBottom: '20px' }}>
        <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
          {label}
        </Checkbox>
      </div>
      <div>
        <Button onClick={toggleChecked}>{!checked ? 'Check' : 'Uncheck'}</Button>
        <Button style={{ margin: '0 10px' }} onClick={toggleDisable}>
          {!disabled ? 'Disable' : 'Enable'}
        </Button>
      </div>
    </div>
  );
};

export default App;
