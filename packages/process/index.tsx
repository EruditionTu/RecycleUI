import * as React from 'react';
import type { LinearProcessProps } from './LinearProcess';
import LinearProcess from './LinearProcess';
import type { CircleProcessProps } from './CircleProcess';
import CircleProcess from './CircleProcess';

type ProcessProps = LinearProcessProps &
  CircleProcessProps & { type?: 'linear' | 'circle' | 'dashboard' };
const Process: React.FC<ProcessProps> = React.memo(
  (props: ProcessProps): React.ReactElement => {
    const { type } = props;
    const processType: string =
      type === 'linear' || type === 'circle' || type === 'dashboard'
        ? type
        : 'linear';
    return (
      <>
        {processType === 'linear' && <LinearProcess {...props} />}
        {processType === 'circle' && <CircleProcess {...props} />}
      </>
    );
  },
);
export default Process;
