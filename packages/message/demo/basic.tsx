import React from 'react';
import message from '..';
import '../style';
import Button from '../../button';
import '../../button/style';

export default () => {
  const [id, setId] = React.useState(0);
  const openMessage = () => {
    message.info({ content: 'This is an info message.' });
    setId(id + 1);
  };
  return <Button onClick={openMessage}>Open Message</Button>;
};
