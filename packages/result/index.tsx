import React, { memo, useCallback, useMemo } from 'react';
import type { FC, ReactElement, PropsWithChildren } from 'react';
import type ResultProps from './type';
import type { ResultStatus } from './type';
import withDefault from '@/packages/common/util/withDefault';
import { ReactComponent as ServerErrorIcon } from '@/packages/common/icon/svg/500.svg';
import { ReactComponent as NotFoundIcon } from '@/packages/common/icon/svg/404.svg';
import { ReactComponent as CannotAccessIcon } from '@/packages/common/icon/svg/403.svg';
import { ReactComponent as SuccessIcon } from '@/packages/common/icon/svg/success.svg';
import { ReactComponent as InfoIcon } from '@/packages/common/icon/svg/info.svg';
import { ReactComponent as WarnIcon } from '@/packages/common/icon/svg/warn.svg';
import { ReactComponent as ErrorIcon } from '@/packages/common/icon/svg/error.svg';

const Result: FC<PropsWithChildren<ResultProps>> = (
  props: PropsWithChildren<ResultProps>,
): ReactElement => {
  const { icon, extra, status, subTitle, title, children } = props;
  const classFirstName = useMemo(() => 'recycle-ui-result', []);
  const resultStatus = useMemo(
    (): ResultStatus =>
      withDefault(status, ['success', 'error', 'info', 'warn', '404', '403', '500'], 'info'),
    [status],
  );
  const iconStyle = useMemo(() => {
    return {
      height: '72px',
      widht: '72px',
    };
  }, []);

  const bigIconStyle = useMemo(() => {
    return {
      width: '294px',
      height: '251px',
    };
  }, []);

  const getClassName = useCallback(
    (baseName) => {
      return `${classFirstName}-${baseName}`;
    },
    [classFirstName],
  );
  const ResultIcon = useCallback(() => {
    switch (resultStatus) {
      case 'success':
        return <SuccessIcon style={iconStyle} />;
      case 'error':
        return <ErrorIcon style={iconStyle} />;
      case 'info':
        return <InfoIcon style={iconStyle} />;
      case 'warn':
        return <WarnIcon style={iconStyle} />;
      case '403':
        return <CannotAccessIcon style={bigIconStyle} />;
      case '404':
        return <NotFoundIcon style={bigIconStyle} />;
      case '500':
        return <ServerErrorIcon style={bigIconStyle} />;
      default:
        return <></>;
    }
  }, [resultStatus]);
  return (
    <div className={getClassName('container')}>
      <div className={getClassName('icon')}>{icon || <ResultIcon />}</div>
      <div className={getClassName('title')}>{title}</div>
      <div className={getClassName('subtitle')}>{subTitle}</div>
      <div className={getClassName('extra')}>{extra}</div>
      <div className={getClassName('content')}>{children}</div>
    </div>
  );
};

export default memo(Result);
