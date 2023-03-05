import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CloseOutlined as Close } from '@ant-design/icons';
import MessageIcon from './MessageIcon';

import type { MessageStaticType, MessageController, MessageConfig, MessageType } from './type';

import "./style"

export * from './type';

export type MessageProps = Omit<MessageConfig, 'type'>;

let container: HTMLDivElement | null; // 包裹消息组件的容器
let topMessageNum: number = 0; // 统计在上面出现的message条数
let bottomMessageNum: number = 0; // 统计在下面出现的message条数
/**
 * 手动移除某个节点
 * @param id 节点id
 * @param position top/bottom节点出现的位置
 */
function remove(id: string | number, position: string) {
  // 重排节点下元素高度
  const container = document.querySelector('.recycle-ui-message-container');
  const children = Array.prototype.slice.call(container?.childNodes);
  for (const key in children) {
    if (children[key].getAttribute('class') === `${position}-${id}`) {
      const removeDom = children[key];
      // 移除节点
      container?.removeChild(removeDom);
      if (position === 'top') {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
      // 改变高度
      changeHeight(children.slice(Number(key)), position);
    }
  }
}
/**
 * 改变元素位置属性
 * @param children 消息节点的dom数组
 * @param position 消息节点出现的位置 top/bottom
 */
function changeHeight(children: HTMLElement[], position: any) {
  for (const key in children) {
    const child = children[key].childNodes[0] as HTMLElement;
    if (children[key].getAttribute('class')?.startsWith(position)) {
      child.style[position] = `${Number(child.style[position].split('p')[0]) - 70}px`;
    }
  }
}
/**
 * 消息节点的组件
 * @param props
 * @returns
 */
const Message = (
  props: Omit<MessageConfig, 'key'> & { type: MessageType; messageBoxId: string | number },
) => {
  const { style, content, type, duration, position, clearable, messageBoxId } = props;
  // 隐藏属性的控制值，用来配合实现动画
  const [opac, setOpac] = useState(1);
  // 获取message组件的渲染实例，来通过transform属性设置组件的位置
  const messageDom = useRef<any>(null);
  const classNames = 'recycle-ui-message';
  // 组件初次加载，数量加1，并在出现动画结束之后移除动画并加上过度属性
  useEffect(() => {
    if (position === 'top') {
      topMessageNum++;
    } else {
      bottomMessageNum++;
    }
    // 在出现动画执行完毕之后，移除动画，并加上过度属性
    setTimeout(() => {
      (messageDom.current as HTMLElement).style.transition = '0.2s linear';
      (messageDom.current as HTMLElement).style.animation = 'none';
    }, 300);
    // 在时间间隔之后，设置opcity属性，将元素满满隐藏起来作为移除动画
    setTimeout(() => {
      setOpac(0);
    }, duration);
  }, []);
  // 设置每一个message的transform位置
  useEffect(() => {
    const transform = position || 'top';
    (messageDom?.current as HTMLElement).style[transform] = `${
      (transform === 'top' ? topMessageNum : bottomMessageNum) * 70
    }px`;
  }, [topMessageNum, bottomMessageNum]);

  const closeMessage = () => {
    remove(messageBoxId, position!);
  };

  return (
    <div className={classNames} style={{ opacity: opac, ...style }} ref={messageDom}>
      <MessageIcon type={type} />
      <span className={`${classNames}-content`}>{content}</span>
      {clearable && (
        <span className={`${classNames}-icon`}>
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
function addInstance(type: MessageType, config: MessageProps) {
  const {
    style = {},
    duration = 3000,
    content = '',
    position = 'top',
    clearable = false,
    key,
  } = config;
  const div = document.createElement('div');
  // 获得一个独一无二的标识符
  const messageBoxId = key || String(Math.floor(Math.random() * 1000));
  div.setAttribute('class', `${position}-${messageBoxId}`);
  // 是否存在消息盒子，不存在就创建
  if (container != null) {
    container.appendChild(div);
  } else {
    container = document.createElement('div');
    container.setAttribute('class', 'recycle-ui-message-container');
    document.body.appendChild(container);
    container.appendChild(div);
  }
  // 设置时间间隔来移除消息div，+200是为了等移除动画结束再删除dom节点
  setTimeout(() => {
    if (Array.prototype.slice.call(container?.childNodes).includes(div)) {
      changeHeight(Array.prototype.slice.call(container?.childNodes), position);
      container?.removeChild(div);
      if (position === 'top') {
        topMessageNum--;
      } else {
        bottomMessageNum--;
      }
    }
  }, duration + 200);
  // 把Message组件挂载到真实的divDom节点上
  ReactDOM.render(
    <Message
      style={style} // 组件的自定义样式
      content={content} // 组件的展示内容
      type={type} // 组件的类型
      duration={duration} // 消息组件删除的时间间隔
      position={position} // 组件出现的位置
      clearable={clearable} // 是否展示关闭icon
      messageBoxId={messageBoxId}
    />,
    div,
  );
}

const info: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('info', config);
const success: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('success', config);
const error: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('error', config);
const normal: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('normal', config);
const warn: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('warn', config);
const loading: MessageController = (config: Omit<MessageConfig, 'type'>) =>
  addInstance('loading', config);
const config = () => {};
const destroy = () => {};
const open = (type: MessageType, config: MessageConfig) => {
  switch (type) {
    case 'info':
      info(config);
      break;
    case 'error':
      error(config);
      break;
    case 'loading':
      loading(config);
      break;
    case 'normal':
      normal(config);
      break;
    case 'success':
      success(config);
      break;
    case 'warn':
      warn(config);
      break;
    default:
    // 报错：之后加上，报一个type不存在的错误。
  }
};
const message: MessageStaticType = {
  config,
  destroy,
  open,
  info,
  success,
  error,
  normal,
  warn,
  loading,
};
export default message;
