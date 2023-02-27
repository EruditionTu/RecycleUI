import React from 'react';
import Steps from '..';
import Message from '../../message';
import Button from '../../button';
import '../../button/style';
import '../../message/style';
import '../style';

const conStyle = {
  minHeight: 200,
  backgroundColor: '#fafafa',
  textAlign: 'center',
  borderRadius: 6,
  paddingTop: 80,
  marginTop: 15,
};
const steps = [
  {
    title: '第一步',
    content: '注册一个账号',
  },
  {
    title: '第二步',
    content: '填写个人信息。',
  },
  {
    title: '第三步',
    content: '验证邮箱',
  },
];

export default function Demo() {
  const [current, setCurrent] = React.useState(0);
  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div style={conStyle as any}>{steps[current].content}</div>
      <div style={{ marginTop: 20 }}>
        {current < steps.length - 1 && (
          <Button onClick={() => setCurrent(current + 1)}>下一步</Button>
        )}
        {current === steps.length - 1 && (
          <Button onClick={() => Message.normal({ content: '处理完成!' })}>完成</Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => setCurrent(current - 1)}>
            上一步
          </Button>
        )}
      </div>
    </div>
  );
}
