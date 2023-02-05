import React from 'react';
import { detectFlexGapSupported } from '../util/styleChecker';

export default () => {
  const [flexible, setFlexible] = React.useState(false);
  React.useEffect(() => {
    setFlexible(detectFlexGapSupported());
  }, []);

  return flexible;
};
