import * as React from 'react';
import Button from '../button';
import "../style";

const App: React.FC = () => (
  <>
    <Button type="primary">Primary Button</Button>
    &nbsp;
    <Button>Default Button</Button>
    &nbsp;
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    &nbsp;
    <Button type="link">Link Button</Button>
  </>
);

export default App;

