import React from 'react';
import Menu from '..';
import '../style';

const App: React.FC = () => {
  return (
    <Menu mode="inline" theme="dark">
      <Menu.Item label="重新加载" key="tubowen" />
      {/* <Menu.Divider /> */}
      <Menu.SubMenu label="选项">
        <Menu.SubMenu label="火影">
          <Menu.Item label="鸣人" />
          <Menu.Item label="纲手" />
          <Menu.Item label="雏田" />
          <Menu.Item label="小樱" />
        </Menu.SubMenu>
        <Menu.Group label="组合">
          <Menu.Item label="添加日期" />
          <Menu.Item label="标签名称" />
        </Menu.Group>
      </Menu.SubMenu>
      <Menu.Item label="另存为" active />
      <Menu.Item label="应用商城" />
      <Menu.Item label="月统计报表导出" />
      <Menu.Item label="偏好设置" />
      {/* <Menu.Divider /> */}
      <Menu.Item label="谷歌地图" />
      <Menu.Item label="百度地图" href="https://map.baidu.com" target="_blank" />
    </Menu>
  );
};
export default App;
