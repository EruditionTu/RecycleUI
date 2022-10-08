import { plugins as pluginsFunc } from "../constants/plugins";
import { pluginNames, pluginsTypes } from "../types/plugins.types";
import { carouselPluginresolverReturnTypes } from "../types/tools.types";
let carouselPluginresolver: (
  carouselProps: any
) => carouselPluginresolverReturnTypes;

carouselPluginresolver = (
  carouselProps: any
): carouselPluginresolverReturnTypes => {
  //处理Carousel的Plugin去调用对应的Plugin函数
  const carouselPlugins = carouselProps?.plugins?.map(
    (plugin: pluginsTypes) => {
      if (typeof plugin === "string") {
        return (
          pluginsFunc[plugin.toUpperCase()] &&
          pluginsFunc[plugin.toUpperCase()]({
            carouselProps: {
              ...carouselProps,
              children: carouselProps.children
                ? carouselProps.children
                : carouselProps.slides,
            },
          })
        );
      }
      return plugin.resolve({
        carouselProps,
        options: plugin.options,
      });
    }
  );
  //处理箭头插件的左箭头渲染组件
  const beforeCarouselItems =
    carouselPlugins?.map(
      (plugin) => plugin.beforeCarouselItems && plugin.beforeCarouselItems()
    ) || [];
  //处理箭头插件的右箭头渲染组件
  const afterCarouselItems =
    carouselPlugins?.map(
      (plugin) => plugin.afterCarouselItems && plugin.afterCarouselItems()
    ) || [];
  return {
    beforeCarouselItems,
    afterCarouselItems,
  };
};
export default carouselPluginresolver;
