import React from 'react';
import Pagination from '..';
import Divider from '../../divider';
import '../style';
import '../../divider/style';

export default function Demo() {
  const [pageObj, setPageObj] = React.useState({
    current: 2,
    pageSize: 10,
  });
  return (
    <div>
      <Pagination
        current={pageObj.current}
        pageSize={pageObj.pageSize}
        total={30}
        divider
        pageSizeOptions={[5, 10, 20, 30]}
        onShowSizeChange={(current, pageSize) =>
          setPageObj({
            current,
            pageSize,
          })
        }
      />
      <Divider />
      <Pagination current={2} pageSize={10} total={38} divider />
      <Divider />
      <Pagination current={1} pageSize={5} total={249} pageSizeOptions={[5, 10, 20, 30]} />
      <Divider />
      <Pagination current={1} alignment="center" pageSize={10} total={50} />
      <Divider />
      <Pagination current={1} pageSize={10} total={60} divider />
      <Divider />
      <Pagination current={1} pageSize={10} total={70} divider />
    </div>
  );
}
