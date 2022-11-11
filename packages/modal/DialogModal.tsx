import type { PropsWithChildren, FC, ReactElement } from 'react';
import React, { useMemo, useCallback, useState, memo } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import {
  CloseOutlined,
  ExclamationCircleFilled,
  CheckCircleFilled,
  WarningFilled,
  CloseCircleFilled,
} from '@ant-design/icons';

import Button from '../button';
import type { DialogProps } from './type';
import type { ButtonProps } from '../button';
import useEventlistener from '../common/util/hooks/useEventlistener';
import useHiddenScroll from '../common/util/hooks/useHiddenScroll';
import withDefault from '../common/util/withDefault';

const DialogModal: FC<PropsWithChildren<DialogProps>> = (
  props: PropsWithChildren<DialogProps>,
): ReactElement => {
  const {
    contentWidth = '400px',
    okButtonProps = {},
    cancelButtonProps = {},
    maskStyle = {},
    contentStyle = {},
    keyboard = true,
    closable = true,
    needFooter = true,
    maskClosable = true,
    centered = false,
    destroyOnClose = false,
    title = 'Dialog Modal',
    maskClass = '',
    contentClass = '',
    onOk = function () {},
    onCancel = function () {},
    afterClose = function () {},
    modalRender,
    content,
    okText,
    cancelText,
    closeIcon,
    footer,
    children,
    type,
  } = props;

  const [visible, setVisible] = useState<boolean>(true);
  const [okLoading, setOkLoading] = useState<boolean>(false);
  const [cancelLoading, setCancelLoading] = useState<boolean>(false);

  const classFirstName = useMemo(() => 'recycle-ui-modal', []);
  const getClassName = useCallback((baseName) => `${classFirstName}-${baseName}`, [classFirstName]);
  const keyBoardCallback = useCallback(
    (e: any) => {
      if (e.keyCode === 27 && visible && keyboard) {
        setVisible(false);
      }
    },
    [visible, keyboard],
  );
  // callback of click okButton or know that
  const okClick = useCallback(
    (e: any) => {
      const result: any = onOk(e);
      if (result instanceof Promise) {
        setOkLoading(true);
        result.then(() => {
          setVisible(false);
          setOkLoading(false);
        });
      } else {
        setVisible(false);
      }
    },
    [setVisible, setOkLoading, onOk],
  );
  // callback of click cancelButton、mask、closeIcon
  const cancelClick = useCallback(
    (e: any) => {
      const result: any = onCancel(e);
      if (result instanceof Promise) {
        setCancelLoading(false);
        result.then(() => {
          setVisible(false);
        });
      } else {
        setVisible(false);
      }
    },
    [setVisible, setCancelLoading, onCancel],
  );
  const maskClick = useCallback(() => {
    if (maskClosable) {
      setVisible(false);
    }
  }, [maskClosable, setVisible]);
  const modalType = useMemo(
    () => withDefault(type, ['success', 'info', 'warning', 'confirm', 'error'], undefined),
    [type],
  );
  const maskClasses = useMemo(() => classNames(getClassName('mask'), maskClass, {}), []);
  const contentClasses = useMemo(
    () =>
      classNames(getClassName('content'), contentClass, modalType, {
        [getClassName('center')]: centered,
      }),
    [centered],
  );
  const footerButtons = useMemo((): Array<{ text: string; props?: ButtonProps }> => {
    switch (modalType) {
      case 'info':
        return [
          {
            text: okText || '知道了',
            props: {
              type: 'solid',
              purpose: 'routine',
              ...okButtonProps,
              loading: okLoading,
              onClick: okClick,
            },
          },
        ];
      case 'error':
        return [
          {
            text: okText || '知道了',
            props: {
              type: 'solid',
              purpose: 'danger',
              ...okButtonProps,
              loading: okLoading,
              onClick: okClick,
            },
          },
        ];
      case 'warning':
        return [
          {
            text: okText || '知道了',
            props: {
              type: 'solid',
              purpose: 'warn',
              ...okButtonProps,
              loading: okLoading,
              onClick: okClick,
            },
          },
        ];
      case 'success':
        return [
          {
            text: okText || '知道了',
            props: {
              type: 'solid',
              purpose: 'info',
              ...okButtonProps,
              loading: okLoading,
              onClick: okClick,
            },
          },
        ];
      default:
        return [
          {
            text: cancelText || '取消',
            props: {
              type: 'transparent',
              ...cancelButtonProps,
              loading: cancelLoading,
              onClick: cancelClick,
            },
          },
          {
            text: okText || '确定',
            props: {
              ...okButtonProps,
              loading: okLoading,
              onClick: okClick,
            },
          },
        ];
    }
  }, [
    cancelText,
    okText,
    cancelButtonProps,
    okButtonProps,
    modalType,
    cancelClick,
    okClick,
    okLoading,
    cancelLoading,
  ]);
  const TitleIcon = useCallback(() => {
    switch (modalType) {
      case 'success':
        return <CheckCircleFilled style={{ color: '#00b42a', marginRight: '5px' }} />;
      case 'info':
        return <ExclamationCircleFilled style={{ color: '#456cfa', marginRight: '5px' }} />;
      case 'warning':
        return <WarningFilled style={{ color: '#ff7d00', marginRight: '5px' }} />;
      case 'error':
        return <CloseCircleFilled style={{ color: '#f53f3f', marginRight: '5px' }} />;
      case 'confirm':
        return <ExclamationCircleFilled style={{ color: '#faad14', marginRight: '5px' }} />;
      default:
        return <></>;
    }
  }, [modalType]);

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
          <div className="title">
            <TitleIcon />
            {title}
          </div>
          {closable && (
            <div className="icon">
              {closeIcon || <CloseOutlined onClick={() => setVisible(false)} />}
            </div>
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
      setVisible,
      getClassName,
      TitleIcon,
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
export default memo(DialogModal);
