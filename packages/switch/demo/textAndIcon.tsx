import React from 'react';
import Switch from '..';
import '../style';

const App: React.FC = () => (
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
  </>
);

export default App;
