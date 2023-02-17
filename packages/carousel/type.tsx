export interface CarouselProps {
  width?: number;
  height?: number;
  position?: number;
  palyTime?: number;
  scrollTime?: number;
  autoPlay?: boolean;
  direction?: 'horizontal' | 'vertical';
  afterChange?: (current: number) => void;
  beforeChange?: (current: number) => void;
}

export interface CarouselRef {
  gotoSlide: (slide: number, dontAnimate?: boolean) => void;
  prevSlide: () => void;
  nextSlide: () => void;
  stopPlay: () => void;
}
