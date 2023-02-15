import React from 'react';
import Pagination from '..';
import Divider from '../../divider';
import '../style';
import '../../divider/style';

export default function Demo() {
  return (
    <div>
      <Pagination
        size="small"
        current={1}
        pageSize={5}
        pageSizeOptions={[5, 10, 20, 30]}
        total={249}
      />
      <Divider />
      <Pagination size="small" current={1} pageSize={10} total={50} />
    </div>
  );
}
