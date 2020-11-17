import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
// import loader
import Spinner from "../../components/Spinner/Spinner";

const Paginator = ({ children, dataLen, fetchData, hasMore }) => {
  return (
    <InfiniteScroll
      dataLength={dataLen}
      next={fetchData}
      hasMore={hasMore}
      loader={<Spinner />}
      // endMessage={
      //   <p style={{ textAlign: "center" }}>
      //     <b>You have reached to the bottom</b>
      //   </p>
      // }
    >
      {children}
    </InfiniteScroll>
  );
};

// @ts-ignore
export default Paginator;
