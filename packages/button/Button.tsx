import type { MouseEvent, FC, ReactElement } from 'react';
import React, { useCallback, useMemo, cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import invariant from 'invariant';
import ButtonGroup from './ButtonGroup';

import type ButtonProps from './type';
import type { ButtonShape, ButtonType, ButtonPurpose } from './type';
import withDefault from '../common/util/withDefault';
import Loader from '../loader';

const LinkNode: FC<ButtonProps> = forwardRef<HTMLElement, ButtonProps>(
  (props: ButtonProps, ref): ReactElement => {
    const {
      disabled = false,
      loading = false,
      style = {},
      loadingProps = {},
      className = '',
      children,
      onClick,
      ...extProps
    } = props;
    const prefixCls = useMemo(() => 'recycle-ui-button', []);
    const classes = useMemo(
      () =>
        classNames(prefixCls, className, `${prefixCls}-link`, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-loading`]: loading,
        }),
      [disabled, loading, prefixCls, className],
    );
    return (
      <Loader {...loadingProps} loading={loading}>
        <a className={classes} onClick={onClick} style={style} ref={ref} {...extProps}>
          {cloneElement(<>{children}</>) /** 将ReactNode类型的children转换为ReactElement */}
        </a>
      </Loader>
    );
  },
);
const TextNode: FC<ButtonProps> = forwardRef<HTMLElement, ButtonProps>(
  (props: ButtonProps, ref): ReactElement => {
    const {
      disabled = false,
      loading = false,
      style = {},
      loadingProps = {},
      className = '',
      children,
      onClick,
      ...extProps
    } = props;
    const prefixCls = useMemo(() => 'recycle-ui-button', []);
    const classes = useMemo(
      () =>
        classNames(prefixCls, `${prefixCls}-text`, className, {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-loading`]: loading,
        }),
      [disabled, loading, className, prefixCls],
    );
    return (
      <Loader {...loadingProps} loading={loading}>
        <div className={classes} onClick={onClick} style={style} ref={ref} {...extProps}>
          <span>
            {cloneElement(<>{children}</>) /** 将ReactNode类型的children转换为ReactElement */}
          </span>
        </div>
      </Loader>
    );
  },
);
const ButtonNode: FC<ButtonProps> = forwardRef<HTMLDivElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const {
      type = 'solid',
      shape = 'rect',
      disabled = false,
      loading = false,
      purpose = 'routine',
      style = {},
      loadingProps = {},
      className = '',
      icon,
      children,
      onClick,
      ...extProps
    } = props;
    const prefixCls = useMemo(() => 'recycle-ui-button', []);

    const buttonShape = useMemo(() => {
      invariant(
        shape === 'circle' || shape === 'rect' || shape === 'round',
        'shape should be one of circle、rect and round,default value is rect ',
      );
      return withDefault(shape, ['circle', 'round', 'rect'], 'rect');
    }, [shape]);
    const canuse = useMemo(() => !loading && !disabled, [loading, disabled]);

    const classes = classNames(
      prefixCls,
      `${prefixCls}-${buttonShape}`,
      `${prefixCls}-${type}`,
      `${prefixCls}-${purpose}`,
      className,
      {
        [`${prefixCls}-icon-only`]: icon && !children,
        [`${prefixCls}-canuse`]: canuse,
        [`${prefixCls}-disabled`]: disabled,
        [`${prefixCls}-loading`]: loading,
      },
    );
    return (
      <Loader {...loadingProps} loading={loading}>
        <div className={classes} onClick={onClick} style={style} ref={ref} {...extProps}>
          {icon && <span className={`${prefixCls}-icon`}>{icon}</span>}
          {children && (
            <span className={`${prefixCls}-button-title`}>
              {cloneElement(<>{children}</>) /** 将ReactNode类型的children转换为ReactElement */}
            </span>
          )}
        </div>
      </Loader>
    );
  },
);
const Button: FC<ButtonProps> = forwardRef<any, ButtonProps>(
  (
    /** 这里没有定义为FC是因为在使用时出现了children不是“IntrinsicAttributes & ButtonProps”上的属性的问题，但我不想污染ButtonProps */
    props: ButtonProps,
    ref,
  ): React.ReactElement => {
    const {
      type = 'solid',
      purpose = 'routine',
      disabled = false,
      loading = false,
      onClick,
    } = props;

    const buttonPurpose = useMemo(() => {
      invariant(
        purpose === 'danger' || purpose === 'info' || purpose === 'routine' || purpose === 'warn',
        'purpose should be one of danger、info、routine and warn,default value is routine ',
      );
      return withDefault(purpose, ['danger', 'info', 'routine', 'warn'], 'routine');
    }, [purpose]);
    const buttonType = useMemo(() => {
      invariant(
        type === 'link' || type === 'solid' || type === 'text' || type === 'transparent',
        'type should be one of link、solid、text and transparnt,default value is solid ',
      );
      return withDefault(type, ['link', 'text', 'solid', 'transparent'], 'solid');
    }, [type]);
    const clickCallback = useCallback(
      (event: MouseEvent<HTMLElement>): void => {
        let cb: Function = () => {};
        const isLink: Boolean = (event.target as HTMLElement).tagName === 'A';
        const canUse = !disabled && !loading;
        if (!canUse) {
          cb = isLink
            ? (e: MouseEvent<HTMLElement>): void => {
                e.preventDefault();
              }
            : () => {};
        } else if (typeof onClick === 'function') {
          cb = onClick;
        }
        cb(event);
      },
      [disabled, loading, onClick],
    );
    const PrposFilter = useMemo(
      () => ({
        ...props,
        purpose: buttonPurpose,
        type: buttonType,
        onClick: clickCallback,
        ref,
      }),
      [buttonPurpose, clickCallback, props],
    );
    switch (type) {
      case 'link':
        return <LinkNode {...PrposFilter} />;
      case 'text':
        return <TextNode {...PrposFilter} />;
      default:
        return <ButtonNode {...PrposFilter} />;
    }
  },
);
interface ButtonWarpperInterface extends FC<ButtonProps> {
  Group: typeof ButtonGroup;
}
const ButtonWarpper: ButtonWarpperInterface = Button as unknown as ButtonWarpperInterface;
ButtonWarpper.Group = ButtonGroup;
export default ButtonWarpper;
export { ButtonProps, ButtonShape, ButtonType, ButtonPurpose };
