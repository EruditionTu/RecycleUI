import { useState, useEffect, useMemo, useRef, CSSProperties } from "react";
import ReactDOM from "react-dom";
import MessageIcon, { MessageType } from "./MessageIcon";
import { MessageProps } from "./MessageInterface";
import Close from "../common/icon/close";
export type Controler = (props: string | MessageProps<string>) => void;
export interface MessageControl {
  info: Controler;
  success: Controler;
  error: Controler;
  normal: Controler;
  warn: Controler;
  loading: Controler;
}
let container: HTMLDivElement | null; //包裹消息组件的容器
let topMessageNum: number = 0; //统计在上面出现的message条数
let bottomMessageNum: number = 0; //统计在下面出现的message条数
/**
 * 手动移除某个节点
 * @param id 节点id
 * @param position top/bottom节点出现的位置
 */
function remove(id: string, position: string) {
  //重排节点下元素高度
  const container = document.querySelector(".all-container");
  const children = Array.prototype.slice.call(container?.childNodes);
  for (let key in children) {
    if (children[key].getAttribute("class") === `${position}-${id}`) {
      const removeDom = children[key];
      //移除节点
      container?.removeChild(removeDom);
      if (position === "top") {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
      //改变高度
      changeHeight(children.slice(Number(key)), position);
    }
  }
}
/**
 * 改变元素位置属性
 * @param children 消息节点的dom数组
 * @param position 消息节点出现的位置 top/bottom
 */
function changeHeight(children: Array<HTMLElement>, position: any) {
  for (let key in children) {
    const child = children[key].childNodes[0] as HTMLElement;
    if (children[key].getAttribute("class")?.startsWith(position)) {
      child.style[position] =
        Number(child.style[position].split("p")[0]) - 70 + "px";
    }
  }
}
/**
 * 消息节点的组件
 * @param props
 * @returns
 */
const Message = (props: MessageProps<string>) => {
  const { style, content, type, duration, position, clearable, messageBoxId } =
    props;
  //隐藏属性的控制值，用来配合实现动画
  const [opac, setOpac] = useState(1);
  //获取message组件的渲染实例，来通过transform属性设置组件的位置
  const messageDom = useRef<any>(null);
  //全局组件类名前缀--注意一下我之后对组件库的补充就在全局的名称前缀上面了
  // const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = "recycleui-message-container";
  //组件初次加载，数量加1，并在出现动画结束之后移除动画并加上过度属性
  useEffect(() => {
    if (position === "top") {
      topMessageNum++;
    } else {
      bottomMessageNum++;
    }
    //在出现动画执行完毕之后，移除动画，并加上过度属性
    setTimeout(() => {
      (messageDom.current as HTMLElement).style.transition = "0.2s linear";
      (messageDom.current as HTMLElement).style.animation = "none";
    }, 300);
    //在时间间隔之后，设置opcity属性，将元素满满隐藏起来作为移除动画
    setTimeout(() => {
      setOpac(0);
    }, duration);
  }, []);
  //设置每一个message的transform位置
  useEffect(() => {
    const transform = position || "top";
    (messageDom?.current as HTMLElement).style[transform] =
      (transform === "top" ? topMessageNum : bottomMessageNum) * 70 + "px";
  }, [topMessageNum, bottomMessageNum]);

  const closeMessage = () => {
    remove(messageBoxId as string, position as string);
  };

  return (
    <div
      className={classNames}
      style={{ opacity: opac, ...style }}
      ref={messageDom}
    >
      <MessageIcon type={type} />
      <span className="toast-content">{content}</span>
      {clearable && (
        <span className="msg-icon">
          <Close onClick={closeMessage} width="16" height="16" />
        </span>
      )}
    </div>
  );
};

/**
 * 添加消息
 * @param type 消息类型
 * @param props 消息配置
 */
function addInstance(type: MessageType, props: string | MessageProps<string>) {
  let style: CSSProperties = {}, //消息样式
    duration: number = 3000, //消息列表消失的时间间隔
    content, //消息内容
    position: "top" | "bottom" = "top", //位置
    clearable = false; //显示关闭图标
  if (typeof props === "object") {
    style = props.style || {};
    duration = props.duration || 3000;
    content = props.content;
    position = props.position ? props.position : "top";
    clearable = props.clearable ? props.clearable : false;
  } else if (typeof props === "string") {
    content = props;
  }
  const div = document.createElement("div");
  //获得一个独一无二的标识符
  const messageBoxId = String(Math.floor(Math.random() * 1000));
  div.setAttribute("class", `${position}-${messageBoxId}`);
  //是否存在消息盒子，不存在就创建
  if (container) {
    container.appendChild(div);
  } else {
    container = document.createElement("div");
    container.setAttribute("class", "all-container");
    document.body.appendChild(container);
    container.appendChild(div);
  }
  //设置时间间隔来移除消息div，+200是为了等移除动画结束再删除dom节点
  setTimeout(() => {
    if (Array.prototype.slice.call(container?.childNodes).includes(div)) {
      changeHeight(Array.prototype.slice.call(container?.childNodes), position);
      container?.removeChild(div);
      if (position === "top") {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
    }
  }, duration + 200);
  //把Message组件挂载到真实的divDom节点上
  ReactDOM.render(
    <Message
      style={style} //组件的自定义样式
      content={content} //组件的展示内容
      type={type} //组件的类型
      duration={duration} //消息组件删除的时间间隔
      position={position} //组件出现的位置
      clearable={clearable} //是否展示关闭icon
      messageBoxId={messageBoxId}
    />,
    div
  );
}

const info: Controler = (props: string | MessageProps<string>) => {
  return addInstance("info", props);
};
const success: Controler = (props: string | MessageProps<string>) => {
  return addInstance("success", props);
};
const error: Controler = (props: string | MessageProps<string>) => {
  return addInstance("error", props);
};
const normal: Controler = (props: string | MessageProps<string>) => {
  return addInstance("normal", props);
};
const warn: Controler = (props: string | MessageProps<string>) => {
  return addInstance("warn", props);
};
const loading: Controler = (props: string | MessageProps<string>) => {
  return addInstance("loading", props);
};
let message: MessageControl = {
  info,
  success,
  error,
  normal,
  warn,
  loading,
};
export default message;
