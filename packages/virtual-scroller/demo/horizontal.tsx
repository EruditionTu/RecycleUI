import React from 'react';
import VirtualList from '..';

export default () => {
  const renderItem = (index: number) => {
    const itemStyle = {
      backgroundColor: `${index % 2 === 0 ? 'red' : 'green'}`,
      height: '100%',
    };

    return (
      <div style={itemStyle} key={index}>
        Row #{index}
      </div>
    );
  };
  return (
    <VirtualList
      height={400}
      // @ts-ignore
      scrollDirection="horizontal"
      itemCount={100}
      renderItem={renderItem}
      itemSize={50}
    />
  );
};
