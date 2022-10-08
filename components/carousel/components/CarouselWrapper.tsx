import * as React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

import Carousel from "./Carousel";

import {
  currentValueSelector,
  transformOffsetSelector,
  nearestSlideSelector,
} from "../state/selectors/carouselSelectors";

import { CarouselWrapperPropTypes } from "../types/components.types";
const CarouselWrapper: React.FC<CarouselWrapperPropTypes> = (
  props: CarouselWrapperPropTypes
): React.ReactElement => {
  const setCurrentValue: Function = useSetRecoilState(currentValueSelector);
  const transformOffset: number = useRecoilValue(transformOffsetSelector);
  const nearestSlideIndex: number = useRecoilValue(nearestSlideSelector);

  return (
    <Carousel
      transformOffset={transformOffset}
      changeSlide={setCurrentValue}
      nearestSlideIndex={nearestSlideIndex}
      {...props}
    ></Carousel>
  );
};
const RecoiledComponent = (props) => (
  <RecoilRoot>
    <CarouselWrapper {...props} />
  </RecoilRoot>
);

export default RecoiledComponent;
