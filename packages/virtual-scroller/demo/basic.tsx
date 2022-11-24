import React from 'react';
import VirtualList from '../index';
import './cm/demo.css';

export default () => {
  const renderItem = (index: number) => {
    const itemStyle = {
      backgroundColor: `${index % 2 === 0 ? 'red' : 'green'}`,
    };

    return (
      <div className="Row" style={itemStyle} key={index}>
        Row #{index}
      </div>
    );
  };
  return <VirtualList height={400} itemCount={100} renderItem={renderItem} itemSize={50} />;
};
