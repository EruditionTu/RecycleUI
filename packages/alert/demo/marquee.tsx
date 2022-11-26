import React from 'react';
import Marquee from 'react-fast-marquee';
import Alert from '..';
import '../style';

export default () => (
  <Alert
    showIcon
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);
