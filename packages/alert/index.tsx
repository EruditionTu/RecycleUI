import React, { useMemo, useCallback, useState } from 'react';
import type { FC, ReactElement } from 'react';
import classNames from 'classnames';
import type { WithCustomStyle } from '../common/util/toolType';
import AlertProps from './type';
import withDefault from '../common/util/withDefault';
import { ReactComponent as SuccessIcon } from '@/packages/common/icon/svg/success.svg';
import { ReactComponent as InfoIcon } from '@/packages/common/icon/svg/info.svg';
import { ReactComponent as WarnIcon } from '@/packages/common/icon/svg/warn.svg';
import { ReactComponent as ErrorIcon } from '@/packages/common/icon/svg/error.svg';
import { ReactComponent as CloseIcon } from '@/packages/common/icon/svg/close.svg';

const Alert: FC<WithCustomStyle<AlertProps>> = (
  props: WithCustomStyle<AlertProps>,
): ReactElement => {
  const {
    className,
    style,
    message,
    description,
    type,
    action,
    icon,
    showIcon = false,
    closeIcon,
    showCloseIcon = false,
  } = props;
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const alertType = useMemo(
    () => withDefault(type, ['info', 'warn', 'success', 'error'], 'info'),
    [type],
  );
  const classFirstName = useMemo(() => 'recycle-ui-alert', []);
  const getClassName = useCallback(
    (baseName: string) => `${classFirstName}-${baseName}`,
    [classFirstName],
  );
  const warpperClass = useMemo(
    () =>
      classNames(getClassName('warpper'), className, alertType, {
        withDescription: message && description,
      }),
    [message, description, className, alertType],
  );
  const iconStyle = useMemo(
    () =>
      message && description
        ? { width: '24px', height: '24px' }
        : { width: '14px', height: '14px' },
    [message, description],
  );
  const closeIconStyle = useMemo(() => ({ width: '12px', height: '12px' }), []);
  const clickCloseIcon = useCallback(() => {
    setShowAlert(false);
  }, []);
  const AlertIcon = useCallback(() => {
    switch (alertType) {
      case 'success':
        return <SuccessIcon style={{ height: '14px', width: '14px' }} />;
      case 'error':
        return <ErrorIcon style={iconStyle} />;
      case 'info':
        return <InfoIcon style={iconStyle} />;
      case 'warn':
        return <WarnIcon style={iconStyle} />;
      default:
        return <></>;
    }
  }, [alertType]);
  return (
    <>
      {showAlert && (
        <div className={warpperClass} style={style}>
          {showIcon && <span className={getClassName('icon')}>{icon || <AlertIcon />}</span>}
          <div className={getClassName('content')}>
            <div className={getClassName('message')}>{message}</div>
            {description && <div className={getClassName('description')}>{description}</div>}
          </div>
          {action && <div className={getClassName('action')}>{action}</div>}
          {showCloseIcon && (
            <span className={getClassName('closeIcon')} onClick={clickCloseIcon}>
              {closeIcon || <CloseIcon style={closeIconStyle} />}
            </span>
          )}
        </div>
      )}
    </>
  );
};
export default Alert;
