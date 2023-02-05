import { useEffect, useRef } from 'react';
import useForceUpdate from '../../common/util/hooks/useForceUpdate';
import type { ScreenMap } from '../util/reponsiveObserve';
import ResponsiveObserve from '../util/reponsiveObserve';

function useBreakpoint(refreshOnChange: boolean = true): ScreenMap {
  const screensRef = useRef<ScreenMap>({});
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const token = ResponsiveObserve.subscribe((supportScreens) => {
      screensRef.current = supportScreens;
      if (refreshOnChange) {
        forceUpdate();
      }
    });

    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  return screensRef.current;
}

export default useBreakpoint;
