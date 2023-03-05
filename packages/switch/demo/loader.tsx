import React from 'react';
import Switch from '..';
import Divider from '../../divider';


const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <Divider />
    <Switch loading />
  </>
);

export default App;
