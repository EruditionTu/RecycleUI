import React, { useMemo } from 'react';
import type { FC, CSSProperties, ReactNode, ReactElement } from 'react';
import classNames from 'classnames';
import SkeletonAvatar from './Avatar';
import SkeletonButton from './Button';
import SkeletonNode from './Node';
import SkeletonElement from './Element';
import SkeletonImage from './Image';
import SkeletonInput from './Input';
import SkeletonParagraph from './Paragraph';
import Title from './Title';
import type { SkeletonTitleProps } from './Title';
import type { AvatarProps } from './Avatar';
import type { SkeletonParagraphProps } from './Paragraph';

type SkeletonAvatarProps = Omit<AvatarProps, 'active'>;

export interface SkeletonProps {
  active?: boolean;
  loading?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  avatar?: SkeletonAvatarProps | boolean;
  title?: SkeletonTitleProps | boolean;
  paragraph?: SkeletonParagraphProps | boolean;
  round?: boolean;
}

function getComponentProps<T>(prop?: T | boolean): T | {} {
  if (prop && typeof prop === 'object') {
    return prop;
  }
  return {};
}

function getAvatarBasicProps(hasTitle: boolean, hasParagraph: boolean): SkeletonAvatarProps {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return { size: 'large', shape: 'square' };
  }

  return { size: 'large', shape: 'circle' };
}

function getTitleBasicProps(hasAvatar: boolean, hasParagraph: boolean): SkeletonTitleProps {
  if (!hasAvatar && hasParagraph) {
    return { width: '38%' };
  }

  if (hasAvatar && hasParagraph) {
    return { width: '50%' };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar: boolean, hasTitle: boolean): SkeletonParagraphProps {
  const basicProps: SkeletonParagraphProps = {};

  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }

  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }

  return basicProps;
}

const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    loading,
    className,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round,
  } = props;

  const prefixCls = useMemo(() => 'recycle-ui-skeleton', []);

  if (loading || !('loading' in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;

    // Avatar
    let avatarNode: ReactNode;
    if (hasAvatar) {
      const avatarProps: SkeletonAvatarProps = {
        prefixCls: `${prefixCls}-avatar`,
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar),
      };
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = (
        <div className={`${prefixCls}-header`}>
          <SkeletonElement {...avatarProps} />
        </div>
      );
    }

    let contentNode: ReactNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title: ReactNode;
      if (hasTitle) {
        const titleProps: SkeletonTitleProps = {
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title),
        };

        $title = <Title {...titleProps} />;
      }

      // Paragraph
      let paragraphNode: ReactNode;
      if (hasParagraph) {
        const paragraphProps: SkeletonParagraphProps = {
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph),
        };

        paragraphNode = <SkeletonParagraph {...paragraphProps} />;
      }

      contentNode = (
        <div className={`${prefixCls}-content`}>
          {$title}
          {paragraphNode}
        </div>
      );
    }

    const cls = classNames(
      prefixCls,
      {
        [`${prefixCls}-with-avatar`]: hasAvatar,
        [`${prefixCls}-active`]: active,
        [`${prefixCls}-round`]: round,
      },
      className,
    );

    return (
      <div className={cls} style={style}>
        {avatarNode}
        {contentNode}
      </div>
    );
  }
  return typeof children !== 'undefined' ? (children as ReactElement) : null;
};

export interface SkeletonType extends FC<SkeletonProps> {
  Button: typeof SkeletonButton;
  Avatar: typeof SkeletonAvatar;
  Input: typeof SkeletonInput;
  Image: typeof SkeletonImage;
  Node: typeof SkeletonNode;
}

const SkeletonWarpper: SkeletonType = Skeleton as unknown as SkeletonType;

SkeletonWarpper.Avatar = SkeletonAvatar;
SkeletonWarpper.Button = SkeletonButton;
SkeletonWarpper.Input = SkeletonInput;
SkeletonWarpper.Image = SkeletonImage;
SkeletonWarpper.Node = SkeletonNode;

export default SkeletonWarpper;
