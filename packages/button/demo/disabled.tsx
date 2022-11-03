import React from 'react';
import Button from '..';
import '../style';

export default () => (
  <>
    <div style={{ marginBottom: '5px' }}>
      <Button type="solid" disabled>
        Routine Solid
      </Button>
      <Button type="solid" purpose="danger" disabled loading>
        Danger Solid
      </Button>
      <Button type="solid" purpose="info" disabled>
        Info Solid
      </Button>
      <Button type="solid" purpose="warn" disabled>
        Warn Solid
      </Button>
    </div>
    <div style={{ marginBottom: '5px' }}>
      <Button type="transparent" disabled loading>
        Routine Transparent
      </Button>
      <Button type="transparent" purpose="danger" disabled>
        Danger Transparent
      </Button>
      <Button type="transparent" purpose="info" disabled>
        Info Transparent
      </Button>
      <Button type="transparent" purpose="warn" disabled>
        Warn Transparent
      </Button>
    </div>
    <Button type="link" disabled loading>
      Link
    </Button>
    <Button type="text" disabled>
      Text
    </Button>
  </>
);
