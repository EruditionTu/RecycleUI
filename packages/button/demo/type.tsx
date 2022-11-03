import React from 'react';
import Button from '..';
import '../style';

const App: React.FC = () => (
  <>
    <Button type="solid">Solid</Button>
    <Button type="transparent">Transparent</Button>
    <Button type="text">Text</Button>
    <Button type="link">Link</Button>
  </>
);

export default App;
