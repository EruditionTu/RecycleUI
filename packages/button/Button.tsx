import type { PropsWithChildren, MouseEvent, FC } from 'react';
import React, { useCallback, useMemo, cloneElement, memo } from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';
import LoadingIcon from '../common/icon/loading';

import ButtonProps, { ButtonShape, ButtonType, ButtonPurpose } from './type';

const LinkNode: FC<ButtonProps> = React.memo(
  (props: PropsWithChildren<ButtonProps>): React.ReactElement => {
    const { disabled, loading, children, onClick } = props;
    const classes = useMemo(
      () =>
        classNames('button', 'link', {
          disabled: disabled,
          loading: loading,
        }),
      [disabled, loading],
    );
    return (
      <div className="button-container">
        <a className={classes} onClick={onClick}>
          <LoadingIcon loading={loading} />
          {
            cloneElement(
              <>{children}</>,
            ) /** 将ReactNode类型的children转换为ReactElement */
          }
        </a>
      </div>
    );
  },
);
const TextNode: FC<ButtonProps> = React.memo(
  (props: ButtonProps): React.ReactElement => {
    const { disabled, onClick, loading, children } = props;
    const classes = useMemo(
      () =>
        classNames('button', 'text', {
          disabled: disabled,
          loading: loading,
        }),
      [disabled, loading],
    );
    return (
      <div className="button-container">
        <div className={classes} onClick={onClick}>
          <LoadingIcon loading={loading} />
          <span>
            {
              cloneElement(
                <>{children}</>,
              ) /** 将ReactNode类型的children转换为ReactElement */
            }
          </span>
        </div>
      </div>
    );
  },
);
const ButtonNode: FC<ButtonProps> = React.memo(
  (props: PropsWithChildren<ButtonProps>) => {
    const { type, shape, disabled, loading, onClick, purpose, children } =
      props;
    const typeSet: ButtonType[] = useMemo<ButtonType[]>(
      () => ['solid', 'transparent'],
      [],
    );
    const shapeSet: ButtonShape[] = useMemo<ButtonShape[]>(
      () => ['circle', 'round', 'rect'],
      [],
    );

    const buttonType = useMemo(
      () => (type != null && typeSet.includes(type) ? type : 'solid'),
      [type, typeSet],
    );
    const buttonShape = useMemo(
      () => (shape != null && shapeSet.includes(shape) ? shape : 'rect'),
      [shape, shapeSet],
    );
    const canuse = useMemo(() => !loading && !disabled, [loading, disabled]);

    const classes = classNames('button', buttonShape, buttonType, purpose, {
      canuse: canuse,
      disabled: disabled,
      loading: loading,
    });
    return (
      <div className="button-container">
        <div className={classes} onClick={onClick}>
          <LoadingIcon loading={loading} />
          {
            cloneElement(
              <>{children}</>,
            ) /** 将ReactNode类型的children转换为ReactElement */
          }
        </div>
      </div>
    );
  },
);
const Button: FC<ButtonProps> = (
  /** 这里没有定义为FC是因为在使用时出现了children不是“IntrinsicAttributes & ButtonProps”上的属性的问题，但我不想污染ButtonProps */
  props: ButtonProps,
): React.ReactElement => {
  const { type, purpose, disabled, loading, onClick } = props;
  const purposeSet: ButtonPurpose[] = useMemo<ButtonPurpose[]>(
    () => ['danger', 'info', 'routine', 'warn'],
    [],
  );
  const buttonPurpose = useMemo(
    () => (purpose && purposeSet.includes(purpose) ? purpose : 'routine'),
    [purpose, purposeSet],
  );
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
      onClick: clickCallback,
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
};
interface ButtonWarpperInterface extends FC<ButtonProps> {
  Group: typeof ButtonGroup;
}
const ButtonWarpper: ButtonWarpperInterface = memo(
  Button,
) as unknown as ButtonWarpperInterface;
ButtonWarpper.Group = ButtonGroup;
export default ButtonWarpper;
export { ButtonProps, ButtonShape, ButtonType, ButtonPurpose };
