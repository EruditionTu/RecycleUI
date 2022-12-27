import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Switch from '..';
import Divider from '../../divider';
import '../../divider/style';
import '../style';

const App: React.FC = () => (
  <>
    <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
    <Divider type="vertical" />
    <Switch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />
  </>
);

export default App;
