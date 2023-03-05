import React, { useState } from 'react';
import Button from '../../button';
import Switch from '../index';


const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button onClick={toggle}>Toggle disabled</Button>
    </>
  );
};

export default App;
