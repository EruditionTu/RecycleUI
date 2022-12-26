import React from 'react';
import Switch from '..';
import '../style';

export default function Demo() {
  return (
    <div>
      <Switch
        size="large"
        style={{ marginRight: 10 }}
        checkedChildren="large"
        unCheckedChildren="large"
      />
      <Switch style={{ marginRight: 10 }} checkedChildren="default" unCheckedChildren="default" />
      <Switch size="small" checkedChildren="small" unCheckedChildren="small">
        电源
      </Switch>
    </div>
  );
}
