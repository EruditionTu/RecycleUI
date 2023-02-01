import React from 'react';
import Skeleton from '..';
import '../style';

const App: React.FC = () => (
  <>
    <Skeleton avatar title round paragraph={{ rows: 4 }} />
  </>
);

export default App;
