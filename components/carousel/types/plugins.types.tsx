export enum pluginNames {
  ARROWS = "ARROWS",
}
export interface ArrowOptionsTypes {
  arrowLeft?: React.ReactElement;
  arrowLeftDisabled?: React.ReactElement;
  arrowRight?: React.ReactElement;
  arrowRightDisabled?: React.ReactElement;
  addArrowClickHandler?: boolean;
}
export interface pluginsFunctionTypes {
  (pluginsLoading: { carouselProps?; options?; refs? }): {};
}
export interface pluginsDetaildTypes {
  resolve: pluginsFunctionTypes;
  options: ArrowOptionsTypes;
}
export type pluginsTypes = pluginsDetaildTypes | string;
