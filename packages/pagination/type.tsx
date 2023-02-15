import type { ReactNode } from 'react';

export interface PaginationPorps {
  /**
   * 当前页数
   */
  current?: number;
  /**
   * 默认的当前页数
   */
  defaultCurrent?: number;
  /**
   * 禁用分页
   */
  disabled?: boolean;
  /**
   * 只有一页时是否隐藏分页器
   */
  hideOnSinglePage?: boolean;
  //   itemRender?: (page, type: 'page' | 'prev' | 'next', originalElement) => React.ReactNode;
  /**
   * 每页条数
   */
  pageSize?: number;
  /**
   * 指定每页可以显示多少条
   */
  pageSizeOptions?: string[];
  /**
   * 当 size 未指定时，根据屏幕宽度自动调整尺寸
   */
  responsive?: boolean;
  /**
   * 是否显示较少页面内容
   */
  showLessItems?: boolean;
  showQuickJumper?: boolean | { goButton: ReactNode };
  showSizeChanger?: boolean;
}
