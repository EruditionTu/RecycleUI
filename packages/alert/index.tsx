import React, { useMemo, useCallback } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { WithCustomStyle } from '../common/util/toolType';
import AlertProps from './type';

const Alert: FC<WithCustomStyle<AlertProps>> = (
  props: WithCustomStyle<AlertProps>,
): ReactElement => {
  const { className, message, description } = props;
  const classFirstName = useMemo(() => 'recycle-ui-alert', []);
  const warpperClass = useMemo(() => classNames(className), []);
  const getClassName = useCallback(
    (baseName: string) => `${classFirstName}-${baseName}`,
    [classFirstName],
  );
  return (
    <div className={warpperClass}>
      <span className={getClassName('icon')} />
      <div className={getClassName('content')}>
        <div className={getClassName('message')}>{message}</div>
        <div className={getClassName('description')}>{description}</div>
      </div>
      <div />
    </div>
  );
};
export default Alert;
