import React, { useEffect, useState } from "react";
// import lib
import { connect } from "react-redux";
// import lib
import { useHistory, useParams } from "react-router";
// import setMeta from "../../components/MetaData";
// import components
// import { ProductPlaceholder } from "../../components/Placeholders";
// import hooks
import { useHandleFetch, useQueryFetch } from "../../hooks";
import { lingualOperations } from "../../state/ducks/lingual";
// import states
import { sessionOperations } from "../../state/ducks/session";
// import Ad from "../home/Ad";
import ProductDescription from "./ProductDescription";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = ({ lingual }) => {
  const history = useHistory();
  const params = useParams();
  const categoryName = params["categoryName"];
  const productName = params["productName"];
  const [productDetailData, setProductDetailData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productDetailState = useQueryFetch(
    "productDetail",
    {
      urlOptions: {
        placeHolders: {
          categoryName,
          productName,
        },
      },
    },
    `${categoryName}-${productName}`
  );

  useEffect(() => {
    if (
      productDetailState.isSuccess &&
      productDetailState.data &&
      Object.keys(productDetailState.data).length > 0
    ) {
      setProductDetailData(productDetailState.data);
    }
  }, [productDetailState.isSuccess]);

  useEffect(() => {
    if (lingual.isBangla && productDetailState.isSuccess) {
      const banglaproductDetailData =
        productDetailState.data &&
        Object.keys(productDetailState.data).length > 0
          ? {
              ...productDetailState.data,
              ...productDetailState.data.bn,
            }
          : {};
      // @ts-ignore
      setProductDetailData(banglaproductDetailData);
    } else {
      const englishproductDetailData =
        productDetailState.data &&
        Object.keys(productDetailState.data).length > 0
          ? {
              ...productDetailState.data,
            }
          : {};
      // @ts-ignore
      setProductDetailData(englishproductDetailData);
    }
  }, [lingual, productDetailState.isSuccess, productDetailState.data]);

  // set SEO meta
  //   useEffect(() => {
  //     if (productDetailState.isSuccess) {
  //       let metaSource = lingual.isBangla
  //         ? productDetailState.data.bn
  //         : productDetailState.data;
  //       setMeta(metaSource, productDetailState.data);
  //     }
  //   }, [lingual, productDetailState.isSuccess]);

  const [proAnalyticsState, handleProAnalyticsFetch] = useHandleFetch(
    [],
    "proanalytics"
  );

  useEffect(() => {
    const getProductDetailState = async () => {
      await handleProAnalyticsFetch({
        urlOptions: {
          params: {
            itemType: `product`,
            itemId: productDetailState.data["id"],
          },
        },
      });
    };

    if (
      productDetailState.isSuccess &&
      productDetailState.data &&
      productDetailState.data["id"]
    ) {
      getProductDetailState();
    }
  }, [productDetailState.isSuccess, productDetailState.data]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productDetailState.isSuccess, productDetailState.data]);

  return (
    <>
      {
        productDetailState.isLoading
        //   &&
        //   <ProductPlaceholder />
      }
      {productDetailState.isSuccess &&
        productDetailData &&
        !(Object.keys(productDetailData).length > 0) && (
          <h2
            style={{
              textAlign: "center",
              margin: "50px 0",
            }}
          >
            Product Not Found
          </h2>
        )}
      {productDetailState.isSuccess &&
        productDetailState.data &&
        Object.keys(productDetailData).length > 0 && (
          <>
            {/* <Helmet>
                <title>
                    {productDetailState.data.name}
                </title>
               </Helmet> */}

            {/* <ProductDetailBanner /> */}
            <ProductDescription
              // @ts-ignore
              productDetail={productDetailData}
              lingual={lingual}
            />
            <RelatedProducts
              // @ts-ignore
              productDetail={productDetailData}
              lingual={lingual}
            />
          </>
        )}
      {/* <Special /> */}
      {/* <Ad /> */}
    </>
  );
};

const mapDispathToProps = {
  logout: sessionOperations.logout,
  login: sessionOperations.login,
  changeLingualToBangla: lingualOperations.changeLingualToBangla,
  changeLingualToEnglish: lingualOperations.changeLingualToEnglish,
};

const mapStateToProps = (state) => ({
  session: state.session,
  cartItems: state.cart,
  lingual: state.lingual,
});

// @ts-ignore
export default connect(mapStateToProps, mapDispathToProps)(ProductDetail);
