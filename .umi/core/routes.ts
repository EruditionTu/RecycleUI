// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'D:/Opensource/RecycleUI/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'D:/Opensource/RecycleUI/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'D:/Opensource/RecycleUI/node_modules/@umijs/preset-dumi/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'D:/Opensource/RecycleUI/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1656148831000,
          "hero": {
            "title": "RecycleUI",
            "desc": "<div class=\"markdown\"><p>React based component library</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "Rapid development",
              "desc": "<div class=\"markdown\"><p>React applications can be quickly built through recycleui</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Strong reusability",
              "desc": "<div class=\"markdown\"><p>Multiple uses in one package</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Mature solutions",
              "desc": "<div class=\"markdown\"><p>Recycleui provides solutions in a variety of business scenarios</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Recycleui is an open-source third-party component library, which provides rich third-party view components and rich third-party business components to facilitate the daily development of front-end developers",
              "heading": "recycleui-is-an-open-source-third-party-component-library-which-provides-rich-third-party-view-components-and-rich-third-party-business-components-to-facilitate-the-daily-development-of-front-end-developers"
            }
          ],
          "title": "Recycleui is an open-source third-party component library, which provides rich third-party view components and rich third-party business components to facilitate the daily development of front-end developers"
        },
        "title": "Recycleui is an open-source third-party component library, which provides rich third-party view components and rich third-party business components to facilitate the daily development of front-end developers - RecycleUI"
      },
      {
        "path": "/components/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Alert.md' */'D:/Opensource/RecycleUI/docs/Components/Alert.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Alert.md",
          "updatedTime": 1657449503831,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Alert"
        },
        "title": "Alert - RecycleUI"
      },
      {
        "path": "/components/avatar",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Avatar.md' */'D:/Opensource/RecycleUI/docs/Components/Avatar.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Avatar.md",
          "updatedTime": 1657449254529,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Avatar"
        },
        "title": "Avatar - RecycleUI"
      },
      {
        "path": "/components/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Button.md' */'D:/Opensource/RecycleUI/docs/Components/Button.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Button.md",
          "updatedTime": 1656148831000,
          "slugs": [
            {
              "depth": 1,
              "value": "Button  按钮",
              "heading": "button--按钮"
            },
            {
              "depth": 2,
              "value": "基础用法",
              "heading": "基础用法"
            },
            {
              "depth": 2,
              "value": "按钮尺寸",
              "heading": "按钮尺寸"
            },
            {
              "depth": 2,
              "value": "按钮的不可用状态",
              "heading": "按钮的不可用状态"
            },
            {
              "depth": 2,
              "value": "按钮的加载中状态",
              "heading": "按钮的加载中状态"
            },
            {
              "depth": 2,
              "value": "危险类型的按钮",
              "heading": "危险类型的按钮"
            },
            {
              "depth": 2,
              "value": "按钮的形状",
              "heading": "按钮的形状"
            },
            {
              "depth": 2,
              "value": "Block按钮",
              "heading": "block按钮"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            },
            {
              "depth": 3,
              "value": "props",
              "heading": "props"
            },
            {
              "depth": 3,
              "value": "events",
              "heading": "events"
            }
          ],
          "title": "Button  按钮",
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Button  按钮 - RecycleUI"
      },
      {
        "path": "/components/carousel",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Carousel.md' */'D:/Opensource/RecycleUI/docs/Components/Carousel.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Carousel.md",
          "updatedTime": 1656148831000,
          "slugs": [],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Carousel"
        },
        "title": "Carousel - RecycleUI"
      },
      {
        "path": "/components/comment",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Comment.md' */'D:/Opensource/RecycleUI/docs/Components/Comment.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Comment.md",
          "updatedTime": 1657449320168,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Comment"
        },
        "title": "Comment - RecycleUI"
      },
      {
        "path": "/components/drawer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Drawer.md' */'D:/Opensource/RecycleUI/docs/Components/Drawer.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Drawer.md",
          "updatedTime": 1657449532062,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Drawer"
        },
        "title": "Drawer - RecycleUI"
      },
      {
        "path": "/components/dropdown",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Dropdown.md' */'D:/Opensource/RecycleUI/docs/Components/Dropdown.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Dropdown.md",
          "updatedTime": 1656148831000,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Dropdown"
        },
        "title": "Dropdown - RecycleUI"
      },
      {
        "path": "/components/empty",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Empty.md' */'D:/Opensource/RecycleUI/docs/Components/Empty.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Empty.md",
          "updatedTime": 1657449431054,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Empty"
        },
        "title": "Empty - RecycleUI"
      },
      {
        "path": "/components/list",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__List.md' */'D:/Opensource/RecycleUI/docs/Components/List.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/List.md",
          "updatedTime": 1657449451582,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "List"
        },
        "title": "List - RecycleUI"
      },
      {
        "path": "/components/menu",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Menu.md' */'D:/Opensource/RecycleUI/docs/Components/Menu.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Menu.md",
          "updatedTime": 1656148831000,
          "slugs": [],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Menu"
        },
        "title": "Menu - RecycleUI"
      },
      {
        "path": "/components/message",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Message.md' */'D:/Opensource/RecycleUI/docs/Components/Message.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Message.md",
          "updatedTime": 1657449548239,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Message"
        },
        "title": "Message - RecycleUI"
      },
      {
        "path": "/components/modal",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Modal.md' */'D:/Opensource/RecycleUI/docs/Components/Modal.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Modal.md",
          "updatedTime": 1657449559686,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Modal"
        },
        "title": "Modal - RecycleUI"
      },
      {
        "path": "/components/progress",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Progress.md' */'D:/Opensource/RecycleUI/docs/Components/Progress.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Progress.md",
          "updatedTime": 1657499927000,
          "slugs": [
            {
              "depth": 1,
              "value": "Process  进度条",
              "heading": "process--进度条"
            },
            {
              "depth": 2,
              "value": "Linear形式的进度条",
              "heading": "linear形式的进度条"
            },
            {
              "depth": 2,
              "value": "Circle形式的进度条",
              "heading": "circle形式的进度条"
            },
            {
              "depth": 2,
              "value": "Dashboard形式的进度条",
              "heading": "dashboard形式的进度条"
            }
          ],
          "title": "Process  进度条",
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Process  进度条 - RecycleUI"
      },
      {
        "path": "/components/table",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Table.md' */'D:/Opensource/RecycleUI/docs/Components/Table.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Table.md",
          "updatedTime": 1657449473391,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Table"
        },
        "title": "Table - RecycleUI"
      },
      {
        "path": "/components/tabs",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Tabs.md' */'D:/Opensource/RecycleUI/docs/Components/Tabs.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Tabs.md",
          "updatedTime": 1657449486972,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Tabs"
        },
        "title": "Tabs - RecycleUI"
      },
      {
        "path": "/components/tag",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Tag.md' */'D:/Opensource/RecycleUI/docs/Components/Tag.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Tag.md",
          "updatedTime": 1656148831000,
          "slugs": [],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Tag"
        },
        "title": "Tag - RecycleUI"
      },
      {
        "path": "/components/upload",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Upload.md' */'D:/Opensource/RecycleUI/docs/Components/Upload.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Upload.md",
          "updatedTime": 1657449286998,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Upload"
        },
        "title": "Upload - RecycleUI"
      },
      {
        "path": "/components/virtuallist",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__Components__Virtuallist.md' */'D:/Opensource/RecycleUI/docs/Components/Virtuallist.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/Components/Virtuallist.md",
          "updatedTime": 1657449411668,
          "slugs": [],
          "nav": {
            "path": "/components",
            "title": "Components"
          },
          "title": "Virtuallist"
        },
        "title": "Virtuallist - RecycleUI"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/alert"
      }
    ],
    "title": "RecycleUI",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
