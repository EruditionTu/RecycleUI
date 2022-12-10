import React from 'react';
import Button from '../../button';
import Overlay from '..';
import '../../button/style';
import '../style';

export default function Demo() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        点击弹出内容
      </Button>
      <Overlay
        backdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, .5)' },
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ backgroundColor: '#fff', minWidth: 500 }}>
          <span
            onClick={() => setIsOpen(false)}
            children="x"
            style={{
              position: 'absolute',
              right: 0,
              top: '-20px',
              color: '#fff',
              cursor: 'pointer',
            }}
          />
          <div
            style={{
              backgroundColor: 'rgb(0, 204, 180)',
              color: 'rgb(255, 255, 255)',
              textAlign: 'center',
              padding: '34px 24px',
            }}
          >
            <h1
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'rgb(255, 255, 255)',
                lineHeight: '1.2',
                margin: '0px',
              }}
            >
              下次预订可享 5 ￥ 优惠
            </h1>
            <div style={{ padding: '5px 0' }}>(5 ￥ ~ ¥38)</div>
            <div style={{ fontSize: '18px' }}>
              使用促销码： <b style={{ color: '#f8e71c', margin: '0px 4px' }}>KSGI5</b>
            </div>
          </div>
          <div style={{ padding: '24px' }}>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'rgb(23, 27, 30)',
                lineHeight: '1.2',
                margin: '0px 0px 4px',
              }}
            >
              订阅 recycle-ui 组件新闻通讯
            </h1>
            <div style={{ color: 'rgb(70, 81, 94)' }}>在收件箱中接收独家更新信息</div>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
