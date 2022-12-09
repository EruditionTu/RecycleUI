import type { ReactNode, CSSProperties } from 'react';
import type { HTMLDivProps } from '../common/util/toolType';

export interface CardGridProps {
  hoverable?: boolean;
}

export interface CardMetaProps {
  avater?: ReactNode;
  description?: ReactNode;
  title?: ReactNode;
}

export default interface CardProps extends Omit<HTMLDivProps, 'title'> {
  size?: 'default' | 'small';
  title?: ReactNode;
  actions?: ReactNode[];
  extra?: ReactNode;
  headStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  cover?: ReactNode;
  loading?: boolean;
  border?: boolean;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  hoverable?: boolean;
  tabList?: { key: string; tab: ReactNode };
  tabProps?: Object;
  onTabChange?: (key: string) => void;
}
