import React, { useContext, useMemo } from 'react';
import { context } from 'dumi/theme';
import './index.less';
import { version } from '../../../package.json';

export default () => {
  const { locale } = useContext(context);

  const characteristics = useMemo(() => {
    if (locale === 'zh-CN') {
      return [
        {
          img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
          title: '开箱即用',
          txt: '简单易用，降低开发成本',
        },
        {
          img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
          title: 'TypeScript',
          txt: '使用 TypeScript 开发，提供完整的类型定义文件，降低维护成本',
        },
        {
          img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
          title: '低代码开发',
          txt: 'Recycle UI将会支持JSON配置开发模式，使得UI与业务进一步解耦',
        },
        {
          img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
          title: '专注业务',
          txt: '提供视图的封装组件，让开发者可以专注于业务层的开发',
        },
        {
          img: 'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
          title: '二次开发',
          txt: '通用组件支持基于业务的二次封装',
        },
        {
          img: 'https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png',
          title: '移动端组件支持',
          txt: 'Recycle UI将会支持移动端组件，提供pc/mobile双端支持',
        },
      ];
    }
    return [
      {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png',
        title: 'Out of the box',
        txt: 'Easy to use and reduce development cost',
      },
      {
        img: 'https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg',
        title: 'TypeScript',
        txt: 'Use TypeScript development to provide complete type definition files and reduce maintenance costs',
      },
      {
        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/U3XjS5IA1tUAAAAAAAAAAAAAFl94AQBr',
        title: 'Low code development',
        txt: 'The Recycle UI will support the JSON configuration development mode to further decouple the UI from the business',
      },
      {
        img: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/q48YQ5X4ytAAAAAAAAAAAAAAFl94AQBr',
        title: 'Focus on business',
        txt: 'Provide view encapsulation components, so that developers can focus on business layer development',
      },
      {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png',
        title: 'Secondary development',
        txt: 'Common components support secondary encapsulation based on business',
      },
      {
        img: 'https://gw.alipayobjects.com/zos/bmw-prod/3863e74a-7870-4874-b1e1-00a8cdf47684/kj9t7ww3_w144_h144.png',
        title: 'Mobile component support',
        txt: 'The Recycle UI will support mobile components and provide pc/mobile dual terminal support',
      },
    ];
  }, [locale]);
  return (
    <div className="homePage">
      {/* content */}
      <div className="main">
        <div className="header divider">
          <div className="headerLeft">
            <h1 className="title">Recycle UI</h1>
            <p className="description">
              <span>
                {locale === 'zh-CN'
                  ? '体验轻量级React Web开发体验'
                  : 'Universal React component library'}
              </span>
              <span className="version">v{version}</span>
            </p>
            <p className="buttons">
              <a href="/#/guide/introduce">
                {locale === 'zh-CN' ? '开始' : 'Get Start'}
              </a>
              <a className="componentBtn" href="/#/common/button">
                {locale === 'zh-CN' ? '组件' : 'Components'}
              </a>
              <a
                className="githubBtn"
                href="https://github.com/fengxinhhh/Concis"
              >
                {locale === 'zh-CN' ? '在Github上查看' : 'View on Github'}
              </a>
            </p>
          </div>
        </div>
        {/* 功能特性 */}
        <div className="group">
          <ul className="features">
            {characteristics.map(item => {
              return (
                <li key={item.title}>
                  <p>
                    <img src={item.img} style={{ width: 84, height: 84 }} />
                  </p>
                  <p>{item.title}</p>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
