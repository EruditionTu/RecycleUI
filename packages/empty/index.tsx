import React, { memo, useMemo, useCallback } from 'react';
import type { PropsWithChildren } from 'react';

export interface EmptyProps {
  description?: React.ReactNode; // 自定义描述内容
  image?: string; // 设置显示图片
  imageStyle?: React.CSSProperties; // 图片样式
}
const Empty: React.FC<PropsWithChildren<EmptyProps>> = (
  props: PropsWithChildren<EmptyProps>,
): React.ReactElement => {
  const classFirstName = useMemo(() => 'recycle-ui-empty', []);
  const getClassName = useCallback((baseName) => `${classFirstName}-${baseName}`, [classFirstName]);

  return (
    <div className={getClassName('warpper')}>
      <div className={getClassName('image')}>
        {props.image ? (
          <img src={props.image} className="image" style={props.imageStyle} />
        ) : (
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="64"
          >
            <path
              d="M734.208 354.461538a78.769231 78.769231 0 0 1 73.216 49.703385L866.461538 552.881231V787.692308a78.769231 78.769231 0 0 1-78.76923 78.76923H236.307692a78.769231 78.769231 0 0 1-78.76923-78.76923v-231.699693l59.195076-151.433846A78.769231 78.769231 0 0 1 290.107077 354.461538h444.100923z m-358.636308 216.615385H196.923077V787.692308a39.384615 39.384615 0 0 0 34.776615 39.108923L236.307692 827.076923h551.384616a39.384615 39.384615 0 0 0 39.108923-34.776615L827.076923 787.692308v-216.615385h-178.648615a137.846154 137.846154 0 0 1-272.856616 0z m358.636308-177.230769H290.107077a39.384615 39.384615 0 0 0-34.658462 20.676923l-2.048 4.371692-44.110769 112.797539h180.302769l-0.039384 0.472615A19.771077 19.771077 0 0 1 413.538462 551.384615a98.461538 98.461538 0 1 0 196.923076 0 19.692308 19.692308 0 0 1 18.786462-19.692307h186.407385l-44.819693-112.994462a39.384615 39.384615 0 0 0-31.822769-24.576L734.208 393.846154z m-203.539692-295.384616a19.692308 19.692308 0 0 1 19.37723 16.147693l0.315077 3.544615v155.254154a19.692308 19.692308 0 0 1-39.069538 3.544615l-0.315077-3.544615V118.153846a19.692308 19.692308 0 0 1 19.692308-19.692308z m-241.506462 5.316924l2.363077 2.678153 114.648615 155.254154a19.692308 19.692308 0 0 1-29.302153 26.033231l-2.363077-2.638769-114.648616-155.254154a19.692308 19.692308 0 0 1 29.302154-26.072615z m509.518769-1.496616a19.692308 19.692308 0 0 1 6.025847 24.497231l-1.851077 3.032615-114.294154 155.254154a19.692308 19.692308 0 0 1-33.555693-20.322461l1.811693-3.032616 114.333538-155.214769a19.692308 19.692308 0 0 1 27.569231-4.214154z"
              fill="#aeb8c2"
            />
          </svg>
        )}
      </div>
      <div className={getClassName('description')}>
        {props.description ? props.description : '暂无数据'}
      </div>
      {props.children && <div className={getClassName('footer')}>{props.children}</div>}
    </div>
  );
};
export default memo(Empty);
