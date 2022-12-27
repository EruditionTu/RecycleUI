import React from 'react';
import Switch from '..';
import Divider from '../../divider';
import '../style';
import '../../divider/style';

const App: React.FC = () => (
  <>
    <Switch loading defaultChecked />
    <Divider />
    <Switch loading />
  </>
);

export default App;
