//@ts-nocheck
import parser from "html-react-parser";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary";
import { useQueryFetch } from "../../hooks";
import PageBanner from "./PageBanner";

const Page = () => {
  const history = useHistory();

  const paegDetailState = useQueryFetch(
    "pageDetail",
    {
      urlOptions: {
        placeHolders: {
          pageUrl: history.location.pathname,
        },
      },
    },
    `${history.location.pathname}`
  );

  const [pageData, setPageData] = useState({});

  // const fetchPages = async () => {
  //   const response = await fetch(
  //       'https://mangshobazar.com/api/page',
  //       {headers: {'Content-Type': 'application/json'}, method: "GET"}
  //   );
  //   setPagesData(await response.json());
  //   console.log("pagesResponse", response);
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    // fetchPages();

    // axios.get(`${config.baseURL}/api/page`).then((res) => {
    //   console.log('Resp', res.data.data);
    //   setPagesData(res.data.data);
    // });

    if (paegDetailState.isSuccess) {
      const pageDetail =
        paegDetailState.data && Object.keys(paegDetailState.data).length > 0
          ? {
              ...paegDetailState.data,
            }
          : {};
      // @ts-ignore
      setPageData(pageDetail);
    } else {
      const pageDetail =
        paegDetailState.data && Object.keys(paegDetailState.data).length > 0
          ? {
              ...paegDetailState.data,
            }
          : {};
      // @ts-ignore
      setPageData(pageDetail);
    }
  }, [paegDetailState.isSuccess]);

  // useEffect(() => {
  //   axios
  //     .get(`${config.baseURL}/api/${history.location.pathname}`)
  //     .then((res) => {
  //       console.log('Res', res.data);
  //       setPageData(res.data);
  //     });
  // }, [history.location.pathname]);

  return (
    <>
      <PageBanner
        full={pageData.cover && pageData.cover.medium}
        name={pageData.name}
      />
      {/* <Para /> */}

      <div className="paraContainer">{parser(pageData.content || "")}</div>

      {/* <SimpleContainer /> */}
    </>
  );
};

// const mapStateToProps = (state) => ({
//   lingual: state.lingual,
// });

// @ts-ignore
export default Page;
// connect(mapStateToProps, null)(Page);
