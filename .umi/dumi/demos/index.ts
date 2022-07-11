// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/button.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/LoadingIcon.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/index.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/loading.less?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/demo/basic.tsx?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/index.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/CarouselWrapper.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/Carousel.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/simulateEvent.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/getChildren.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/carouselPluginresolver.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/constants/plugins.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/plugins/index.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/plugins/arrows.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/types/plugins.types.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/atoms/slideAtoms.tsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/_util/hooks/useOnResize.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/_util/hooks/useEventlistener.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/CarouselItem.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/style/carousel-item.less?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/atoms/carouselAtoms.tsx?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/style/carousel.less?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/selectors/carouselSelectors.tsx?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/clamp.tsx?dumi-raw-code';
import rawCode26 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/demo/basic.tsx?dumi-raw-code';
import rawCode27 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/index.tsx?dumi-raw-code';
import rawCode28 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/Menu.tsx?dumi-raw-code';
import rawCode29 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/MenuContext.tsx?dumi-raw-code';
import rawCode30 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/state/MenuAtoms.tsx?dumi-raw-code';
import rawCode31 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/compileToReactComponents.tsx?dumi-raw-code';
import rawCode32 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/MenuItem.tsx?dumi-raw-code';
import rawCode33 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/types/MenuItemTypes.tsx?dumi-raw-code';
import rawCode34 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/SubMenu.tsx?dumi-raw-code';
import rawCode35 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/types/SubMenuTypes.tsx?dumi-raw-code';
import rawCode36 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/randomKey.tsx?dumi-raw-code';
import rawCode37 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/buildPath.tsx?dumi-raw-code';
import rawCode38 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/style/index.tsx?dumi-raw-code';
import rawCode39 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/style/index.less?dumi-raw-code';
import rawCode40 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/demo/basic.tsx?dumi-raw-code';
import rawCode41 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/index.tsx?dumi-raw-code';
import rawCode42 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/Tag.tsx?dumi-raw-code';
import rawCode43 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/CheckableTag.tsx?dumi-raw-code';
import rawCode44 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/style/index.tsx?dumi-raw-code';
import rawCode45 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/style/index.less?dumi-raw-code';
import rawCode46 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/basic.tsx?dumi-raw-code';
import rawCode47 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/size.tsx?dumi-raw-code';
import rawCode48 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/disabled.tsx?dumi-raw-code';
import rawCode49 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/loadingicon.tsx?dumi-raw-code';
import rawCode50 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/danger.tsx?dumi-raw-code';
import rawCode51 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/shape.tsx?dumi-raw-code';
import rawCode52 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/block.tsx?dumi-raw-code';
import rawCode53 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/demo/linear.tsx?dumi-raw-code';
import rawCode54 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/index.tsx?dumi-raw-code';
import rawCode55 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/Linearprocess.tsx?dumi-raw-code';
import rawCode56 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/index.tsx?dumi-raw-code';
import rawCode57 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/style/index.tsx?dumi-raw-code';
import rawCode58 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/demo/circle.tsx?dumi-raw-code';

export default {
  'basic-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("D:/Opensource/RecycleUI/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _button = _interopRequireDefault(await import("D:/Opensource/RecycleUI/components/button/button"));

    await import("D:/Opensource/RecycleUI/components/button/style");

    var _react = _interopRequireDefault(await import("react"));

    var App = function App() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary"
      }, "Primary Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], null, "Default Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "dashed"
      }, "Dashed Button"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "text"
      }, "Text Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "link"
      }, "Link Button"));
    };

    var _default = App;
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import Button from '../button';\nimport \"../style\";\nimport React from 'react';\n\nconst App: React.FC = () => (\n  <>\n    <Button type=\"primary\">Primary Button</Button>\n    <Button>Default Button</Button>\n    <Button type=\"dashed\">Dashed Button</Button>\n    <br />\n    <Button type=\"text\">Text Button</Button>\n    <Button type=\"link\">Link Button</Button>\n  </>\n);\n\nexport default App;"},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"basic-demo"},
  },
  'carousel-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/carousel/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode6},"index.tsx":{"import":"../../carousel","content":rawCode7},"components/CarouselWrapper.tsx":{"import":"./components/CarouselWrapper","content":rawCode8},"components/Carousel.tsx":{"import":"./Carousel","content":rawCode9},"tools/simulateEvent.tsx":{"import":"../tools/simulateEvent","content":rawCode10},"tools/getChildren.tsx":{"import":"../tools/getChildren","content":rawCode11},"tools/carouselPluginresolver.tsx":{"import":"../tools/carouselPluginresolver","content":rawCode12},"constants/plugins.tsx":{"import":"../constants/plugins","content":rawCode13},"plugins/index.tsx":{"import":"../plugins","content":rawCode14},"plugins/arrows.tsx":{"import":"./arrows","content":rawCode15},"types/plugins.types.tsx":{"import":"../types/plugins.types","content":rawCode16},"state/atoms/slideAtoms.tsx":{"import":"../state/atoms/slideAtoms","content":rawCode17},"_util/hooks/useOnResize.tsx":{"import":"../../_util/hooks/useOnResize","content":rawCode18},"_util/hooks/useEventlistener.tsx":{"import":"../../_util/hooks/useEventlistener","content":rawCode19},"components/CarouselItem.tsx":{"import":"./CarouselItem","content":rawCode20},"style/carousel-item.less":{"import":"../style/carousel-item.less","content":rawCode21},"state/atoms/carouselAtoms.tsx":{"import":"../state/atoms/carouselAtoms","content":rawCode22},"style/carousel.less":{"import":"../style/carousel.less","content":rawCode23},"state/selectors/carouselSelectors.tsx":{"import":"../state/selectors/carouselSelectors","content":rawCode24},"tools/clamp.tsx":{"import":"../../tools/clamp","content":rawCode25}},"dependencies":{"react":{"version":">=16.13.1"},"recoil":{"version":"0.7.2"},"classnames":{"version":"2.3.1"},"lodash":{"version":"4.17.21"}},"identifier":"carousel-basic"},
  },
  'menu-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/menu/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode26},"index.tsx":{"import":"../","content":rawCode27},"Menu.tsx":{"import":"./Menu","content":rawCode28},"MenuContext.tsx":{"import":"./MenuContext","content":rawCode29},"state/MenuAtoms.tsx":{"import":"./state/MenuAtoms","content":rawCode30},"tools/compileToReactComponents.tsx":{"import":"./tools/compileToReactComponents","content":rawCode31},"MenuItem.tsx":{"import":"../MenuItem","content":rawCode32},"types/MenuItemTypes.tsx":{"import":"./types/MenuItemTypes","content":rawCode33},"SubMenu.tsx":{"import":"../SubMenu","content":rawCode34},"types/SubMenuTypes.tsx":{"import":"./types/SubMenuTypes","content":rawCode35},"tools/randomKey.tsx":{"import":"./randomKey","content":rawCode36},"tools/buildPath.tsx":{"import":"./tools/buildPath","content":rawCode37},"style/index.tsx":{"import":"../style","content":rawCode38},"style/index.less":{"import":"./index.less","content":rawCode39}},"dependencies":{"react":{"version":">=16.13.1"},"classnames":{"version":"2.3.1"},"recoil":{"version":"0.7.2"},"lodash":{"version":"4.17.21"}},"identifier":"menu-basic"},
  },
  'tag-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/tag/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode40},"index.tsx":{"import":"../","content":rawCode41},"Tag.tsx":{"import":"./Tag","content":rawCode42},"CheckableTag.tsx":{"import":"./CheckableTag","content":rawCode43},"style/index.tsx":{"import":"../style","content":rawCode44},"style/index.less":{"import":"./index.less","content":rawCode45}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"tag-basic"},
  },
  'basic-1-demo': {
    component: dynamic({
  loader: async function () {
    var _interopRequireDefault = require("D:/Opensource/RecycleUI/node_modules/@babel/runtime/helpers/interopRequireDefault");

    var _button = _interopRequireDefault(await import("D:/Opensource/RecycleUI/components/button/button"));

    await import("D:/Opensource/RecycleUI/components/button/style");

    var _react = _interopRequireDefault(await import("react"));

    var App = function App() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "primary"
      }, "Primary Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], null, "Default Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "dashed"
      }, "Dashed Button"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "text"
      }, "Text Button"), /*#__PURE__*/_react["default"].createElement(_button["default"], {
        type: "link"
      }, "Link Button"));
    };

    var _default = App;
    return _default;
  },
  loading: () => null
}),
    previewerProps: {"sources":{"_":{"tsx":"import Button from '../button';\nimport \"../style\";\nimport React from 'react';\n\nconst App: React.FC = () => (\n  <>\n    <Button type=\"primary\">Primary Button</Button>\n    <Button>Default Button</Button>\n    <Button type=\"dashed\">Dashed Button</Button>\n    <br />\n    <Button type=\"text\">Text Button</Button>\n    <Button type=\"link\">Link Button</Button>\n  </>\n);\n\nexport default App;"},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"basic-1-demo"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode46},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-basic"},
  },
  'button-size': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/size.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode47},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-size"},
  },
  'button-disabled': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/disabled.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode48},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-disabled"},
  },
  'button-loadingicon': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/loadingicon.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode49},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-loadingicon"},
  },
  'button-danger': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/danger.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode50},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-danger"},
  },
  'button-shape': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/shape.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode51},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-shape"},
  },
  'button-block': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/block.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode52},"button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-block"},
  },
  'process-linear': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/process/demo/linear.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode53},"index.tsx":{"import":"../","content":rawCode54},"Linearprocess.tsx":{"import":"./Linearprocess","content":rawCode55},"button/index.tsx":{"import":"../../button","content":rawCode56},"button/button.tsx":{"import":"../button","content":rawCode1},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode2},"button/style/index.tsx":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4},"style/loading.less":{"import":"./loading.less","content":rawCode5},"style/index.tsx":{"import":"../style","content":rawCode57}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"process-linear"},
  },
  'process-circle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/process/demo/circle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode58}},"dependencies":{},"identifier":"process-circle"},
  },
};
