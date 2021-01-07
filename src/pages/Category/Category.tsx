// @ts-nocheck

import React, { useEffect, useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import CategoryBanner from "./CategoryBanner";
import WeFollow from "./WeFollow";
import { changeMeta, changeTitle } from "../../lib/meta";

import { Link } from "react-router-dom";

// import components
import { Spinner } from "../../components/loading";
import CategoryDetailProducts from "./CategoryDetailProducts";
import CategorySubCategories from "./CategorySubCategories";
import SubCategories from "./SubCategories";
import { CatalogPlaceholder } from "../../components/Placeholders";
// import setMeta from "../../components/MetaData";

// import hooks
import { useQueryFetch, useHandleFetch } from "../../hooks";

// import lib
import { useLocation, useParams } from "react-router";

// import states
import { sessionOperations } from "../../state/ducks/session";
import { lingualOperations } from "../../state/ducks/lingual";

// import lib
import { connect } from "react-redux";

const Category = ({ lingual }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const location = useLocation();

  const [categoryDetailData, setCategoryDetailData] = useState([]);
  const topCategoryUrl = params["categoryName"] || "";
  const subCategoryUrl = params["subCategoryName"] || "";

  const categoryDetailState = useQueryFetch(
    "categoryDetailByURL",
    {
      urlOptions: {
        placeHolders: {
          categoryName: topCategoryUrl + "/" + subCategoryUrl || "",
        },
        params: {
          isSubCategory: true,
        },
      },
    },
    `categoryDetailByURL-${subCategoryUrl + subCategoryUrl}`
  );

  useEffect(() => {
    categoryDetailState.refetch();
  }, [topCategoryUrl, subCategoryUrl]);

  useEffect(() => {
    if (
      categoryDetailState.isSuccess &&
      categoryDetailState.data &&
      Object.keys(categoryDetailState.data).length > 0
    ) {
      setCategoryDetailData(categoryDetailState.data);
    }
  }, [categoryDetailState.isSuccess, categoryDetailState.data]);

  useEffect(() => {
    if (lingual.isBangla && categoryDetailState.isSuccess) {
      const banglaCategoryDetailData =
        categoryDetailState.data &&
        Object.keys(categoryDetailState.data).length > 0
          ? {
              ...categoryDetailState.data,
              ...categoryDetailState.data.bn,
            }
          : {};
      // @ts-ignore
      setCategoryDetailData(banglaCategoryDetailData);
    } else {
      const englishCategoryDetailData =
        categoryDetailState.data &&
        Object.keys(categoryDetailState.data).length > 0
          ? {
              ...categoryDetailState.data,
            }
          : {};
      // @ts-ignore
      setCategoryDetailData(englishCategoryDetailData);
    }
  }, [lingual, categoryDetailState.isSuccess, categoryDetailState.data]);

  // set SEO meta
  //   useEffect(() => {
  //     if (categoryDetailState.isSuccess) {
  //       let metaSource = lingual.isBangla ? categoryDetailState.data.bn : categoryDetailState.data;
  //       setMeta(metaSource, categoryDetailState.data)
  //     }
  //   }, [lingual, categoryDetailState.isSuccess, categoryDetailState.data]);

  const [proAnalyticsState, handleProAnalyticsFetch] = useHandleFetch(
    [],
    "proanalytics"
  );

  useEffect(() => {
    if (location.state) {
      let metaTitle = location.state.name || "" + " - " + "Bishwamarket";
      if (lingual.isBangla) {
        metaTitle = location.state.name || "" + " - " + "Bishwamarket";
      }
      changeTitle(metaTitle);
      // changeMeta();// to be done
    }
  }, [lingual, location.state]);

  useEffect(() => {
    (async function () {
      await handleProAnalyticsFetch({
        urlOptions: {
          params: {
            itemType: `category`,
            itemId: location.state?.catId,
          },
        },
      });
    })();
  }, [location.state?.catId]);

  return (
    <Auxiliary>
      {categoryDetailState.isLoading && (
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <Spinner />
        </div>
      )}

      {categoryDetailState.isSuccess &&
        categoryDetailState.data &&
        Object.keys(categoryDetailData)?.length > 0 && (
          <>
            <CategoryBanner categoryDetailData={categoryDetailData} />

            <CategorySubCategories categoryDetailData={categoryDetailData} />

            {/* {categoryDetailData['subCategory']
                                && categoryDetailData['subCategory'].length > 0 && <SubCategories subCategoryList={categoryDetailData['subCategory']} />}  */}
          </>
        )}

      {!categoryDetailState.isLoading && (
        <>
          {(categoryDetailState.isError || !categoryDetailState?.data) && (
            <div
              style={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                justifyItems: "center",
              }}
            >
              <div
                style={{
                  marginBottom: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyItems: "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    marginBottom: "20px",
                    color: "#555",
                    textTransform: "uppercase",
                  }}
                >
                  Category Not Found
                </h2>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    color: "#ffc107",
                  }}
                >
                  <Link to="/">Go to Home page (bishwamarket.com) </Link>
                </p>
              </div>
            </div>
          )}
        </>
      )}

      {categoryDetailData["subCategory"] &&
        !(categoryDetailData["subCategory"].length > 0) && (
          <CategoryDetailProducts
            lingual={lingual}
            categoryName={params["categoryName"]}
            categoryId={location.state?.catId}
            categoryDetailState={categoryDetailState}
          />
        )}
    </Auxiliary>
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
export default connect(mapStateToProps, mapDispathToProps)(Category);
