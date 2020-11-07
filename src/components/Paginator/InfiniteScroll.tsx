import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const UseLessComponent = () => <></>; 

const Index = ({ children, dataLen, fetchData, hasMore }) => {
  return (
    <InfiniteScroll
      dataLength={dataLen}
      next={fetchData}
      hasMore={hasMore}
      loader={UseLessComponent}
    >
      {children}
    </InfiniteScroll>
  );
};


// @ts-ignore
export default Index;
