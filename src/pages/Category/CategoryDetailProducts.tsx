// @ts-nocheck

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import components
import { ViewDetailsCard as ProductCard } from "../../components/Product";
import { CatalogPlaceholder } from "../../components/Placeholders";

// import infinite scroll

import Paginator from "../../hoc/Paginator";

// import hooks
import { useQueryFetch, useQueryInfinitePaginate } from "../../hooks";
interface Props {
  categoryName?: any;
  categoryId?: any;
  lingual?: any;
  categoryDetailState?: any;
}

const CategoryDetailProducts = ({
  categoryName,
  lingual,
  categoryId,
  categoryDetailState,
}: Props) => {
  //fetching by category Id

  const [categoryProductListData, setCategoryProductListData] = useState([]);

  const paginatedProductList = useQueryInfinitePaginate(
    "categoryProducts",
    {
      urlOptions: {
        placeHolders: {
          id: categoryId,
        },
        params: {
          limitNumber: 16,
        },
      },
    },
    `categoryProducts-${categoryId}`
  );

  useEffect(() => {
    if (
      paginatedProductList.status === "success" &&
      paginatedProductList.data &&
      paginatedProductList.data.length > 0
    ) {
      if (lingual.isBangla) {
        const productListPageBn = paginatedProductList?.data.map((page, i) => {
          const group = {
            ...page,
            data:
              page?.data &&
              page?.data.length > 0 &&
              page?.data.map((product) => {
                return {
                  ...product,
                  ...product.bn,
                };
              }),
          };
          return group;
        });
        setCategoryProductListData(productListPageBn || []);
      } else {
        const productListPage = paginatedProductList?.data.map((page, i) => {
          const group = {
            ...page,
            data:
              page?.data &&
              page?.data.length > 0 &&
              page?.data.map((product) => {
                return {
                  ...product,
                };
              }),
          };
          return group;
        });
        setCategoryProductListData(productListPage || []);
      }
    } else {
      setCategoryProductListData([]);
    }
  }, [paginatedProductList.status, paginatedProductList.data, lingual]);

  return (
    <>
      {paginatedProductList.status === "success" &&
        paginatedProductList?.data &&
        paginatedProductList?.data.length > 0 && (
          <h2
            onClick={() => paginatedProductList.setPage((page) => page + 1)}
            className="categoryDetailProducts__productTitle"
          >
            {lingual.isBangla
              ? `মোট ${categoryProductListData?.[0]?.total || 0} পাওয়া গেছে`
              : `Total ${categoryProductListData?.[0]?.total || 0} found`}
          </h2>
        )}

      {categoryDetailState.isSuccess && (
        <>
          {paginatedProductList.status === "loading" && <CatalogPlaceholder />}
          {paginatedProductList.status === "success" && (
            <>
              {/* <div className='categoryDetailProducts'> */}
              <div className="ml-3">
                <Paginator
                  dataLen={categoryProductListData.length}
                  fetchData={() => paginatedProductList.fetchMore()}
                  hasMore={paginatedProductList.canFetchMore}
                >
                  {categoryProductListData.map((page, i) => (
                    <React.Fragment key={i}>
                      {page?.data &&
                        page?.data.length > 0 &&
                        page?.data.map((product) => (
                          <div className="my-4">
                            <ProductCard product={product} />
                          </div>
                        ))}
                    </React.Fragment>
                  ))}
                </Paginator>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CategoryDetailProducts;
