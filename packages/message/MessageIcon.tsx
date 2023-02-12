import React from 'react';
import { ReactComponent as Error } from '../common/icon/svg/error.svg';
import { ReactComponent as Info } from '../common/icon/svg/info.svg';
import { ReactComponent as Success } from '../common/icon/svg/success.svg';
import { ReactComponent as Warn } from '../common/icon/svg/warn.svg';
import type { MessageType } from './type';
import Loader from '../loader';
import '../loader/style';

const MessageIcon = (props: { type?: MessageType }) => {
  const prefixCls = 'recycle-ui-messgae';

  if (!props.type || props.type === 'normal') return <></>;
  if (props.type === 'info') {
    return (
      <span className={`${prefixCls}-icon`}>
        <Info width="16" height="16" />
      </span>
    );
  }
  if (props.type === 'success') {
    return (
      <span className={`${prefixCls}-icon`}>
        <Success width="16" height="16" />
      </span>
    );
  }
  if (props.type === 'error') {
    return (
      <span className={`${prefixCls}-icon`}>
        <Error width="16" height="16" />
      </span>
    );
  }
  if (props.type === 'warn') {
    return (
      <span className={`${prefixCls}-icon`}>
        <Warn width="16" height="16" />
      </span>
    );
  }
  return (
    <span className={`${prefixCls}-icon`}>
      <Loader />
    </span>
  );
};
export default MessageIcon;
