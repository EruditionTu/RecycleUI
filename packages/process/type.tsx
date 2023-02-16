export interface CommonProps {
  percent: number; // 进度条当前进度
  showInfo?: boolean; // 是否显示进度数或状态图标(目前我没做状态图标的显示)
  status?: string; // 状态可选：success exception normal active(仅限 line)
  strokeColor?: string; // 进度条的色彩
  trailColor?: string; // 未完成的分段的颜色
  strokeWidth?: number; // 进度条线的宽度
}
export interface LinearProcessProps extends CommonProps {}

export interface CircleProcessProps extends CommonProps {
  width?: number; // 圆形进度条画布宽度
}
