import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
  useMemo,
  useRef,
  Children,
} from 'react';
import type { ReactNode } from 'react';
import classNames from 'classnames';
import type { CarouselProps, CarouselRef } from './type';
import type { WithCustomStyle } from '../common/util/type';
import "./style"

const Carousel = forwardRef<CarouselRef, WithCustomStyle<CarouselProps> & { children?: ReactNode }>(
  (props, ref) => {
    const {
      position = 0,
      direction = 'horizontal',
      width = 400,
      height = 200,
      palyTime = 2000,
      scrollTime = 200,
      autoPlay = true,
      afterChange,
      beforeChange,
      className,
      style,
    } = props;

    const prefixCls = useMemo(() => 'recycle-ui-carousel', []);

    const cls = useMemo(() => classNames(prefixCls, className), [prefixCls, className]);

    const [currentPosition, currentPositionSet] = useState(position);
    const [transitionInner, transitionInnerSet] = useState(`${scrollTime * 0.001}s ease-in-out`);
    const positionRef = useRef(currentPosition);
    const childCount = Children.count(props.children) + 1;
    const stopPlay = useRef({ stop: () => {}, after: afterChange, before: beforeChange });

    useImperativeHandle(
      ref,
      () => ({
        gotoSlide,
        prevSlide: () => gotoSlide(positionRef.current - 1),
        nextSlide: () => gotoSlide(positionRef.current + 1),
        stopPlay: () => stopPlay.current.stop(),
      }),
      [ref],
    );

    const gotoSlide = (slidNumber: number) => {
      stopPlay.current.stop();
      const maxSlid = childCount - 1;
      let slidNumberTemp = slidNumber > maxSlid ? maxSlid : slidNumber;
      slidNumberTemp = slidNumber < 0 ? 0 : slidNumberTemp;
      positionRef.current = slidNumberTemp;
      currentPositionSet(slidNumberTemp);
      play();
    };

    const play = (ms: number = palyTime) => {
      if (autoPlay) {
        const time = setInterval(() => {
          stopPlay.current.after?.(positionRef.current);
          positionRef.current++;
          if (positionRef.current >= childCount) {
            positionRef.current = 0;
          }
          currentPositionSet(positionRef.current);
          stopPlay.current.before?.(positionRef.current);
        }, ms);
        stopPlay.current.stop = () => {
          clearInterval(time);
        };
      }
    };

    useEffect(() => {
      play();
      return () => {
        stopPlay.current.stop();
      };
    }, [autoPlay]);

    useEffect(() => {
      let time: NodeJS.Timeout;
      if (childCount === currentPosition + 1) {
        time = setTimeout(() => {
          stopPlay.current.before = () => {
            transitionInnerSet(`${scrollTime * 0.001}s ease-in-out`);
            stopPlay.current.before = props.beforeChange;
          };
          transitionInnerSet('none');
          gotoSlide(0);
        }, scrollTime);
      }
      return () => {
        clearTimeout(time);
      };
    }, [currentPosition]);

    const childrens = React.Children.map(props.children, (child) => {
      return <div style={{ width, height, ...style }}>{child}</div>;
    });

    const innerStyle = useMemo(() => {
      const style = { transform: '', display: '' };
      switch (direction) {
        case 'horizontal':
          style.transform = `translate3d(${-(currentPosition * width)}px, 0px, 0px)`;
          style.display = 'flex';
          break;
        case 'vertical':
          style.transform = `translate3d(0px, ${-(currentPosition * height)}px, 0px)`;
          style.display = 'block';
          break;
        default:
          break;
      }
      return style;
    }, [direction, currentPosition, width, height]);

    return (
      <div className={cls} style={{ width, height }}>
        <div
          className={`${cls}-content`}
          style={{ width: width * childCount, transition: transitionInner, ...innerStyle }}
        >
          {childrens}
          <div style={{ width, height, ...style }}>{childrens?.[0]}</div>
        </div>
      </div>
    );
  },
);

export default Carousel;
