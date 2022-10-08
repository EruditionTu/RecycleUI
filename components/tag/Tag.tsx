import * as React from "react";
import classnames from "classnames";
import CheckableTag from "./CheckableTag";
type CheckableTagType = typeof CheckableTag;
type TagSize = "small" | "default" | "large";
type TagEffect = "dark" | "plain";
interface TagPropsType {
  closable?: boolean; //是否为可关闭标签
  icon?: React.ReactNode; //标签的图标
  closeIcon?: React.ReactNode; //标签关闭按钮的图标
  color?: string; //标签的颜色
  visible?: boolean; //控制标签的关闭状态
  children?: React.ReactNode; //标签中的子元素
  size?: TagSize; //Tag大小
  effect?: TagEffect; //Tag的主题
}
interface TagEventsType {
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void; //标签关闭触发的回调
}
const Tag: React.FC<TagPropsType & TagEventsType> = (
  props: TagPropsType & TagEventsType
): React.ReactElement => {
  const [visible, setVisible] = React.useState<boolean>(false); //控制标签是否显示
  const [closable, setClosable] = React.useState<boolean>(false); //控制关闭ICON是否显示
  const tagRef: any = React.useRef(null); //获取标签实例
  const closeRef: any = React.useRef(null); //获取关闭Icon实例
  React.useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);
  React.useEffect(() => {
    setClosable(props.closable || false);
  }, [props.closable]);
  React.useEffect((): void => {
    if (props.color) {
      if (props.effect === "dark") {
        tagRef.current.style.color = "white";
        tagRef.current.style.backgroundColor = props.color;
        if (closeRef.current) closeRef.current.style.stroke = "white";
      } else if (!props.effect || props.effect === "plain") {
        tagRef.current.style.color = props.color;
        if (closeRef.current) closeRef.current.style.stroke = props.color;
      }
      tagRef.current.style.borderColor = props.color;
    }
  }, [props.effect, props.color, tagRef, closeRef]);
  const closeClick = React.useCallback(
    (e: any): void => {
      e.stopPropagation(); //阻止React合成事件的冒泡
      setVisible(true);
      props.onClose && props.onClose(e);
    },
    [setVisible]
  );
  //关闭Icon渲染函数
  const renderCloseIcon: () => React.ReactElement =
    React.useCallback((): React.ReactElement => {
      if (props.closeIcon) {
        return (
          <span onClick={closeClick} className={"close"}>
            {props.closeIcon}
          </span>
        );
      }
      return (
        <svg
          ref={closeRef}
          onClick={closeClick}
          className={classnames("close", "default-close-icon", {
            "close-visible": !closable,
          })}
          xmlns="https://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <path className="line" fill="none" d="M17.36,34.736l17.368-17.472" />
          <path className="line" fill="none" d="M34.78,34.684L17.309,17.316" />
        </svg>
      );
    }, [closable, closeRef, closeClick, props.closeIcon]);
  return (
    <div
      ref={tagRef}
      className={classnames(
        `${props.size ? props.size : "default"}`,
        "default-tag",
        {
          visible: visible,
        }
      )}
    >
      <div className={"tag-container"}>
        {props.icon ? props.icon : null}
        <span>{props.children}</span>
        {renderCloseIcon()}
      </div>
    </div>
  );
};
const TagComponent: any = React.memo(Tag);
TagComponent.CheckableTag = CheckableTag;
export default TagComponent;
