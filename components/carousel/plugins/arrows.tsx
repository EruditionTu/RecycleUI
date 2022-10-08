import * as React from "react";
import classnames from "classnames";
import { useRecoilValue } from "recoil";
import { pluginNames, pluginsFunctionTypes } from "../types/plugins.types";
import { slidesState } from "../state/atoms/slideAtoms";

let renderArrowWithAddedHandler: (
  element: React.ReactElement,
  onClick: Function,
  name: string,
  addArrowClickHandler: boolean,
  key: string,
  disable: boolean
) => React.ReactElement;
let arrows: pluginsFunctionTypes;
renderArrowWithAddedHandler = (
  element: React.ReactElement,
  onClick: Function,
  name: string,
  addArrowClickHandler: boolean,
  key: string,
  disable: boolean = false
): React.ReactElement => {
  return (
    <div key={key} className={classnames()}>
      {element}
    </div>
  );
};
arrows = ({
  carouselProps,
  options,
}): {
  name: pluginNames;
  beforeCarouselItems: () => React.ReactElement;
  afterCarouselItems: () => React.ReactElement;
} => ({
  name: pluginNames.ARROWS,
  beforeCarouselItems: (): React.ReactElement => {
    const slides = useRecoilValue(slidesState);
    const disabled =
      carouselProps.value <= 0 &&
      carouselProps?.children?.length === slides.length;
    const preSlide = React.useCallback(
      () => carouselProps.onClick(carouselProps.value, carouselProps.value - 1),
      [carouselProps.value, carouselProps.onClick]
    );
    return (
      <button key={"arrow-left"} className={""} disabled={disabled}>
        <span>prev</span>
      </button>
    );
  },
  afterCarouselItems: (): React.ReactElement => {
    const slides = useRecoilValue(slidesState);

    const nextSlide = React.useCallback(
      () =>
        carouselProps.onChange(carouselProps.value, carouselProps.value + 1),
      [carouselProps.value, carouselProps.onClick]
    );

    const disabled =
      carouselProps.value >= slides.length - 1 &&
      carouselProps?.children?.length === slides.length;
    return (
      <button
        key={"arrow-right"}
        className={""}
        onClick={nextSlide}
        disabled={disabled}
      >
        <span>next</span>
      </button>
    );
  },
});
export default arrows;
