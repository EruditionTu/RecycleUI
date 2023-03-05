import React from 'react';
import List from '..';

const data = [
  '人总是在接近幸福时倍感幸福，在幸福进行时却患得患失。',
  '因为爱过，所以慈悲；因为懂得，所以宽容。',
  '你如果认识从前的我，也许你会原谅现在的我。',
  <span>你还不来，我怎敢老去。</span>,
];
const Demo = () => (
  <List
    dataSource={data}
    striped
    size="small"
    renderItem={(item) => {
      return <List.Item>{item}</List.Item>;
    }}
  />
);
export default Demo;
