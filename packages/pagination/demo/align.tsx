import React from 'react';
import Pagination from '..';
import Divider from '../../divider';
import '../style';
import '../../divider/style';

export default function Demo() {
  return (
    <div>
      <Pagination
        current={5}
        total={250}
        onChange={(pageNumber) => {
          console.log(`pageNumber:${pageNumber}`);
        }}
      />
      <Divider />
      <Pagination
        current={1}
        alignment="center"
        total={250}
        onChange={(pageNumber) => {
          console.log(`pageNumber:${pageNumber}`);
        }}
      />
      <Divider />
      <Pagination
        current={25}
        alignment="right"
        total={250}
        onChange={(pageNumber) => {
          console.log(`pageNumber:${pageNumber}`);
        }}
      />
    </div>
  );
}
