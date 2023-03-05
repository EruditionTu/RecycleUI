import React from 'react';
import Card from '..';

const App: React.FC = () => (
  <div style={{ backgroundColor: '#ececec', padding: '30px' }}>
    <Card title="Card title" border={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
);

export default App;
