import type { PropsWithChildren, FC, ReactElement } from 'react';
import React, { useMemo, useCallback, memo } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { CloseOutlined } from '@ant-design/icons';

import Button from '../button';
import type ModalProps from './type';
import type { ButtonProps } from '../button';
import useEventlistener from '../common/util/hooks/useEventlistener';
import useHiddenScroll from '../common/util/hooks/useHiddenScroll';

const Modal: FC<PropsWithChildren<ModalProps>> = (
  props: PropsWithChildren<ModalProps>,
): ReactElement => {
  const {
    contentWidth = '520px',
    okText = '确定',
    cancelText = '取消',
    okButtonProps = {},
    cancelButtonProps = {},
    maskStyle = {},
    contentStyle = {},
    keyboard = true,
    closable = true,
    needFooter = true,
    maskClosable = true,
    centered = false,
    visible = false,
    destroyOnClose = false,
    title = 'Modal',
    maskClass = '',
    contentClass = '',
    onOk = function () {},
    onCancel = function () {},
    afterClose = function () {},
    modalRender,
    content,
    closeIcon,
    footer,
    children,
  } = props;

  const classFirstName = useMemo(() => 'recycle-ui-modal', []);
  const getClassName = useCallback((baseName) => `${classFirstName}-${baseName}`, [classFirstName]);
  const keyBoardCallback = useCallback(
    (e: any) => {
      if (e.keyCode === 27 && visible && keyboard) {
        onCancel(e);
      }
    },
    [visible, keyboard, onCancel],
  );
  const maskClick = useCallback(
    (e: any) => {
      if (maskClosable) {
        onCancel(e);
      }
    },
    [maskClosable, onCancel],
  );
  const maskClasses = useMemo(() => classNames(getClassName('mask'), maskClass, {}), []);
  const contentClasses = useMemo(
    () =>
      classNames(getClassName('content'), contentClass, {
        [getClassName('center')]: centered,
      }),
    [centered],
  );
  const footerButtons = useMemo((): Array<{ text: string; props?: ButtonProps }> => {
    return [
      {
        text: cancelText,
        props: {
          type: 'transparent',
          onClick: onCancel,
          ...cancelButtonProps,
        },
      },
      {
        text: okText,
        props: {
          onClick: onOk,
          ...okButtonProps,
        },
      },
    ];
  }, [cancelText, okText, cancelButtonProps, okButtonProps, onCancel, onOk]);

  // the hook is used to register events
  useEventlistener('keydown', keyBoardCallback);
  // the hook is used to hidden the scroller
  useHiddenScroll('body', visible);

  const Popup = useCallback(
    () => (
      <div
        className={contentClasses}
        style={contentStyle}
        onClick={(e) => {
          e.stopPropagation(); // Prevent clicking the content panel, and the module is closed due to the response of the mask
        }}
      >
        <div className={getClassName('content-header')}>
          <div className="title">{title}</div>
          {closable && (
            <div className="icon">{closeIcon || <CloseOutlined onClick={onCancel} />}</div>
          )}
        </div>
        <div className={getClassName('content-body')}>{content || children}</div>
        {needFooter && (
          <div className={getClassName('content-footer')}>
            {footer ||
              footerButtons.map((footerItem, index: number) => {
                return (
                  <Button {...footerItem.props} key={index}>
                    {footerItem.text}
                  </Button>
                );
              })}
          </div>
        )}
        <div />
      </div>
    ),
    [
      contentClasses,
      contentStyle,
      title,
      closable,
      closeIcon,
      content,
      children,
      needFooter,
      footer,
      footerButtons,
      getClassName,
      onCancel,
    ],
  );

  // this memo is to render the modalRender and transfer the Popup in it
  const ModalRenderWarpper = useMemo(() => {
    return typeof modalRender === 'function' ? modalRender(<Popup />) : null;
  }, [Popup, modalRender]);

  return (
    <div
      className={classFirstName}
      style={
        {
          '--modal-content-width': `${
            typeof contentWidth === 'string' ? contentWidth : `${contentWidth}px`
          }`,
        } as any
      }
    >
      <CSSTransition
        in={visible}
        timeout={200}
        appear
        mountOnEnter
        unmountOnExit={destroyOnClose}
        classNames={getClassName('fadeModal')}
        onEnter={(e: HTMLElement) => {
          e.style.display = 'block';
        }}
        onExited={(e: HTMLElement) => {
          e.style.display = 'none';
          afterClose();
        }}
      >
        <div className={maskClasses} onClick={maskClick} style={maskStyle}>
          <CSSTransition
            in={visible}
            timeout={200}
            appear
            mountOnEnter
            unmountOnExit={destroyOnClose}
            classNames={getClassName('fadeContent')}
            onEnter={(e: HTMLElement) => {
              e.style.display = 'block';
            }}
            onExited={(e: HTMLElement) => {
              e.style.display = 'none';
            }}
          >
            {typeof modalRender === 'function' ? ModalRenderWarpper : <Popup />}
          </CSSTransition>
        </div>
      </CSSTransition>
    </div>
  );
};
export default memo(Modal);
