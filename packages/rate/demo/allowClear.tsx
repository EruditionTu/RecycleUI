import React from 'react';
import Rate from '..';
import '../style';

const App: React.FC = () => (
  <>
    <Rate allowClear defaultValue={3} />
    <span>allowClear: true</span>
    <br />
    <Rate defaultValue={3} />
    <span>allowClear: false</span>
  </>
);

export default App;
