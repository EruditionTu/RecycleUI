import Col from './Col';
import useInternalBreakpoint from './hooks/useBreakpoint';
import Row from './Row';
import type { ColProps, ColSize } from './Col';
import type { RowProps } from './Row';

// Do not export params
function useBreakpoint() {
  return useInternalBreakpoint();
}

export { ColProps, ColSize, RowProps, Row, Col };

export default { useBreakpoint };
