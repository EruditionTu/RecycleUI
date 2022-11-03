import { defineConfig } from 'dumi';
import style from './docs/siteIndexStyle';
export default defineConfig({
  title: 'Recycle UI', // 站点名称
  mode: 'site',
  favicon: 'https://concis.org.cn/images/concis-logo.png',
  logo: 'https://concis.org.cn/images/concis-logo.png',
  outputPath: 'doc-site', // 输出文件夹
  apiParser: {
    propFilter: {
      skipNodeModules: true,
      skipPropsWithName: [
        'autoFocus',
        'form',
        'formAction',
        'formEncType',
        'title',
      ],
      skipPropsWithoutDoc: true,
    },
  },
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  navs: {
    'en-US': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/EruditionTu/RecycleUI',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'Github',
        path: 'https://github.com/EruditionTu/RecycleUI',
      },
    ],
  },
  styles: [style],
  resolve: {
    includes: ['docs', 'packages'],
  },
});
