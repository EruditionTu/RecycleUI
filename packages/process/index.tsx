import React from 'react';
import type { LinearProcessProps } from './type';
import LinearProcess from './Linearprocess';
import type { CircleProcessProps } from './type';
import CircleProcess from './Circleprocess';
import "./style"

type ProcessProps = LinearProcessProps &
  CircleProcessProps & { type?: 'linear' | 'circle' | 'dashboard' };
const Process: React.FC<ProcessProps> = React.memo((props: ProcessProps): React.ReactElement => {
  const { type } = props;
  const processType: string =
    type === 'linear' || type === 'circle' || type === 'dashboard' ? type : 'linear';
  return (
    <>
      {processType === 'linear' && <LinearProcess {...props} />}
      {processType === 'circle' && <CircleProcess {...props} />}
    </>
  );
});
export default Process;

export { LinearProcessProps, CircleProcessProps };
