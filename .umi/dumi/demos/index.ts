// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/button.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/LoadingIcon.tsx?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/index.tsx?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/index.less?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/style/loading.less?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/size.tsx?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/disabled.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/loadingicon.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/danger.tsx?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/shape.tsx?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/demo/block.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/demo/basic.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/index.tsx?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/CarouselWrapper.tsx?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/Carousel.tsx?dumi-raw-code';
import rawCode17 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/simulateEvent.tsx?dumi-raw-code';
import rawCode18 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/getChildren.tsx?dumi-raw-code';
import rawCode19 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/carouselPluginresolver.tsx?dumi-raw-code';
import rawCode20 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/constants/plugins.tsx?dumi-raw-code';
import rawCode21 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/plugins/index.tsx?dumi-raw-code';
import rawCode22 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/plugins/arrows.tsx?dumi-raw-code';
import rawCode23 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/types/plugins.types.tsx?dumi-raw-code';
import rawCode24 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/atoms/slideAtoms.tsx?dumi-raw-code';
import rawCode25 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/_util/hooks/useOnResize.tsx?dumi-raw-code';
import rawCode26 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/_util/hooks/useEventlistener.tsx?dumi-raw-code';
import rawCode27 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/components/CarouselItem.tsx?dumi-raw-code';
import rawCode28 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/style/carousel-item.less?dumi-raw-code';
import rawCode29 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/atoms/carouselAtoms.tsx?dumi-raw-code';
import rawCode30 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/style/carousel.less?dumi-raw-code';
import rawCode31 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/state/selectors/carouselSelectors.tsx?dumi-raw-code';
import rawCode32 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/carousel/tools/clamp.tsx?dumi-raw-code';
import rawCode33 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/demo/basic.tsx?dumi-raw-code';
import rawCode34 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/index.tsx?dumi-raw-code';
import rawCode35 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/Menu.tsx?dumi-raw-code';
import rawCode36 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/MenuContext.tsx?dumi-raw-code';
import rawCode37 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/state/MenuAtoms.tsx?dumi-raw-code';
import rawCode38 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/compileToReactComponents.tsx?dumi-raw-code';
import rawCode39 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/MenuItem.tsx?dumi-raw-code';
import rawCode40 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/types/MenuItemTypes.tsx?dumi-raw-code';
import rawCode41 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/SubMenu.tsx?dumi-raw-code';
import rawCode42 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/types/SubMenuTypes.tsx?dumi-raw-code';
import rawCode43 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/randomKey.tsx?dumi-raw-code';
import rawCode44 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/tools/buildPath.tsx?dumi-raw-code';
import rawCode45 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/style/index.tsx?dumi-raw-code';
import rawCode46 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/menu/style/index.less?dumi-raw-code';
import rawCode47 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/demo/linear.tsx?dumi-raw-code';
import rawCode48 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/index.tsx?dumi-raw-code';
import rawCode49 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/LinearProcess.tsx?dumi-raw-code';
import rawCode50 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/CircleProcess.tsx?dumi-raw-code';
import rawCode51 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/button/index.tsx?dumi-raw-code';
import rawCode52 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/style/index.tsx?dumi-raw-code';
import rawCode53 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/process/demo/circle.tsx?dumi-raw-code';
import rawCode54 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/demo/basic.tsx?dumi-raw-code';
import rawCode55 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/index.tsx?dumi-raw-code';
import rawCode56 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/Tag.tsx?dumi-raw-code';
import rawCode57 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/CheckableTag.tsx?dumi-raw-code';
import rawCode58 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/style/index.tsx?dumi-raw-code';
import rawCode59 from '!!dumi-raw-code-loader!D:/Opensource/RecycleUI/components/tag/style/index.less?dumi-raw-code';

export default {
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-basic"},
  },
  'button-size': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/size.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode7},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-size"},
  },
  'button-disabled': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/disabled.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode8},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-disabled"},
  },
  'button-loadingicon': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/loadingicon.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-loadingicon"},
  },
  'button-danger': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/danger.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode10},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-danger"},
  },
  'button-shape': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/shape.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode11},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-shape"},
  },
  'button-block': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/button/demo/block.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode12},"button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"button-block"},
  },
  'carousel-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/carousel/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13},"index.tsx":{"import":"../../carousel","content":rawCode14},"components/CarouselWrapper.tsx":{"import":"./components/CarouselWrapper","content":rawCode15},"components/Carousel.tsx":{"import":"./Carousel","content":rawCode16},"tools/simulateEvent.tsx":{"import":"../tools/simulateEvent","content":rawCode17},"tools/getChildren.tsx":{"import":"../tools/getChildren","content":rawCode18},"tools/carouselPluginresolver.tsx":{"import":"../tools/carouselPluginresolver","content":rawCode19},"constants/plugins.tsx":{"import":"../constants/plugins","content":rawCode20},"plugins/index.tsx":{"import":"../plugins","content":rawCode21},"plugins/arrows.tsx":{"import":"./arrows","content":rawCode22},"types/plugins.types.tsx":{"import":"../types/plugins.types","content":rawCode23},"state/atoms/slideAtoms.tsx":{"import":"../state/atoms/slideAtoms","content":rawCode24},"_util/hooks/useOnResize.tsx":{"import":"../../_util/hooks/useOnResize","content":rawCode25},"_util/hooks/useEventlistener.tsx":{"import":"../../_util/hooks/useEventlistener","content":rawCode26},"components/CarouselItem.tsx":{"import":"./CarouselItem","content":rawCode27},"style/carousel-item.less":{"import":"../style/carousel-item.less","content":rawCode28},"state/atoms/carouselAtoms.tsx":{"import":"../state/atoms/carouselAtoms","content":rawCode29},"style/carousel.less":{"import":"../style/carousel.less","content":rawCode30},"state/selectors/carouselSelectors.tsx":{"import":"../state/selectors/carouselSelectors","content":rawCode31},"tools/clamp.tsx":{"import":"../../tools/clamp","content":rawCode32}},"dependencies":{"react":{"version":">=16.13.1"},"recoil":{"version":"0.7.2"},"classnames":{"version":"2.3.1"},"lodash":{"version":"4.17.21"}},"identifier":"carousel-basic"},
  },
  'menu-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/menu/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode33},"index.tsx":{"import":"../","content":rawCode34},"Menu.tsx":{"import":"./Menu","content":rawCode35},"MenuContext.tsx":{"import":"./MenuContext","content":rawCode36},"state/MenuAtoms.tsx":{"import":"./state/MenuAtoms","content":rawCode37},"tools/compileToReactComponents.tsx":{"import":"./tools/compileToReactComponents","content":rawCode38},"MenuItem.tsx":{"import":"../MenuItem","content":rawCode39},"types/MenuItemTypes.tsx":{"import":"./types/MenuItemTypes","content":rawCode40},"SubMenu.tsx":{"import":"../SubMenu","content":rawCode41},"types/SubMenuTypes.tsx":{"import":"./types/SubMenuTypes","content":rawCode42},"tools/randomKey.tsx":{"import":"./randomKey","content":rawCode43},"tools/buildPath.tsx":{"import":"./tools/buildPath","content":rawCode44},"style/index.tsx":{"import":"../style","content":rawCode45},"style/index.less":{"import":"./index.less","content":rawCode46}},"dependencies":{"react":{"version":">=16.13.1"},"classnames":{"version":"2.3.1"},"recoil":{"version":"0.7.2"},"lodash":{"version":"4.17.21"}},"identifier":"menu-basic"},
  },
  'process-linear': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/process/demo/linear.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode47},"index.tsx":{"import":"../","content":rawCode48},"LinearProcess.tsx":{"import":"./LinearProcess","content":rawCode49},"CircleProcess.tsx":{"import":"./CircleProcess","content":rawCode50},"button/index.tsx":{"import":"../../button","content":rawCode51},"button/button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"button/style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6},"style/index.tsx":{"import":"../style","content":rawCode52}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"process-linear"},
  },
  'process-circle': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/process/demo/circle.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode53},"index.tsx":{"import":"../","content":rawCode48},"LinearProcess.tsx":{"import":"./LinearProcess","content":rawCode49},"CircleProcess.tsx":{"import":"./CircleProcess","content":rawCode50},"button/index.tsx":{"import":"../../button","content":rawCode51},"button/button.tsx":{"import":"../button","content":rawCode2},"LoadingIcon.tsx":{"import":"./LoadingIcon","content":rawCode3},"button/style/index.tsx":{"import":"../style","content":rawCode4},"style/index.less":{"import":"./index.less","content":rawCode5},"style/loading.less":{"import":"./loading.less","content":rawCode6}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"process-circle"},
  },
  'tag-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'D:/Opensource/RecycleUI/components/tag/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode54},"index.tsx":{"import":"../","content":rawCode55},"Tag.tsx":{"import":"./Tag","content":rawCode56},"CheckableTag.tsx":{"import":"./CheckableTag","content":rawCode57},"style/index.tsx":{"import":"../style","content":rawCode58},"style/index.less":{"import":"./index.less","content":rawCode59}},"dependencies":{"react":{"version":"17.0.2"},"classnames":{"version":"2.3.1"}},"identifier":"tag-basic"},
  },
};
