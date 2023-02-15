import React from 'react';

export default React.forwardRef<HTMLOptGroupElement, any>((props, ref) => (
  <optgroup {...props} ref={ref} />
));
