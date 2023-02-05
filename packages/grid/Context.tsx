import type { Context } from 'react';
import { createContext } from 'react';

export interface ContextState {
  gutter?: [number, number];
  wrap?: boolean;
  supportFlexGap?: boolean;
}

const GridContext: Context<ContextState> = createContext({});

export default GridContext;
