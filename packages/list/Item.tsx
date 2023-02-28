import React, { Fragment, useMemo } from 'react';

export type TagType = React.ComponentType | keyof JSX.IntrinsicElements;

export interface ListItemProps<Tag extends TagType> extends React.HTMLProps<Tag> {
  disabled?: boolean;
  active?: boolean;
  extra?: React.ReactNode;
  href?: string;
  tagName?: Tag;
}

export const ListItem = React.forwardRef(
  <Tag extends TagType = 'div'>(
    props: ListItemProps<Tag>,
    ref: React.Ref<React.HTMLProps<Tag>>,
  ) => {
    const { className, children, extra, tagName = 'div', active = false, ...resetProps } = props;
    const prefixCls = useMemo(() => 'recycle-ui-list-item', []);
    const cls = [
      prefixCls,
      className,
      props.disabled ? 'recycle-ui-list-disabled' : null,
      active ? 'recycle-ui-list-active' : null,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();
    const TagName = props.href && typeof tagName === 'string' ? 'a' : tagName;
    return React.createElement(
      TagName,
      {
        ...resetProps,
        className: cls,
        ref,
      } as any,
      !extra || resetProps.href ? (
        children
      ) : (
        <>
          <div className={`${prefixCls}-main`}>{children}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </>
      ),
    );
  },
);

ListItem.displayName = 'List.Item';
