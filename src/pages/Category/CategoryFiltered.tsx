// @ts-nocheck
import React, { useState, useEffect } from 'react';
import StarRating from '../../components/StarRating';
import Cow from '../../components/SVGs/Cow';
import SingleProductCard from '../../components/SingleProductCard';
import { ProductCard } from '../../components/Product';
import { CatalogPlaceholder } from '../../components/Placeholders';
import DropDownComponant from '../../components/DropDownComponent/DropDownComponent';
import FilterDropDown from '../../components/FilterDropDown';
import AnotherFilterDropdown from '../../components/FilterDropDown/AnotherFilterDropdown';

// import hooks
import { useQueryFetch, useHandleFetch } from '../../hooks';

// import components
import { Spinner } from '../../components/loading';
import CategoriesDrawer from '../../components/CategoriesDrawer';

// import states
import { sessionOperations } from '../../state/ducks/session';
import { lingualOperations } from '../../state/ducks/lingual';

// import lib
import { connect } from 'react-redux';

const CategoryFiltered = ({ lingual }) => {
  const [categoryProductsState, handleCategoryProductsFetch] = useHandleFetch(
    [],
    'categoryProducts'
  );

  const [selectedCateoryId, setSelectedCategoryId] = useState('');
  const [categoryListData, setCategoryListData] = useState([]);
  const [categoryProductsData, setCategoryProductsData] = useState([]);

  const categoryListState = useQueryFetch('categoryList', {
    urlOptions: {
      params: {
        subCategoryValue: true,
      },
    },
  });

  useEffect(() => {
    if (
      categoryListState.isSuccess &&
      categoryListState.data &&
      categoryListState.data.length > 0
    ) {
      setSelectedCategoryId(categoryListState.data[0].id);
    }
  }, [categoryListState.isSuccess]);

  useEffect(() => {
    if (lingual.isBangla && categoryListState.isSuccess) {
      const banglaCategoryList =
        categoryListState.data && categoryListState.data.length > 0
          ? categoryListState.data.map((cat: any) => {
              return {
                ...cat,
                ...cat.bn,
              };
            })
          : [];
      // @ts-ignore
      setCategoryListData(banglaCategoryList);
    } else {
      const banglaCategoryList =
        categoryListState.data && categoryListState.data.length > 0
          ? categoryListState.data.map((cat: any) => {
              return {
                ...cat,
              };
            })
          : [];
      // @ts-ignore
      setCategoryListData(banglaCategoryList);
    }
  }, [lingual, categoryListState.isSuccess]);

  useEffect(() => {
    const setCategoryProducts = async () => {
      const newProductsRes = await handleCategoryProductsFetch({
        urlOptions: {
          placeHolders: {
            id: selectedCateoryId,
          },
          params: {
            isRecursive: true,
          },
        },
      });
    };

    if (selectedCateoryId) {
      setCategoryProducts();
    }
  }, [selectedCateoryId]);

  useEffect(() => {
    if (
      categoryProductsState.done &&
      categoryProductsState.data &&
      categoryProductsState.data.length > 0
    ) {
      setCategoryProductsData(categoryProductsState.data);
    }
  }, [categoryProductsState.done]);

  useEffect(() => {
    if (lingual.isBangla && categoryProductsState.done) {
      const banglaCategoryProductsData =
        categoryProductsState.data &&
        Object.keys(categoryProductsState.data).length > 0
          ? categoryProductsState.data.map((prod) => {
              return {
                ...prod,
                ...prod.bn,
              };
            })
          : {};
      // @ts-ignore
      setCategoryProductsData(banglaCategoryProductsData);
    } else {
      const englishCategoryProductsData =
        categoryProductsState.data &&
        Object.keys(categoryProductsState.data).length > 0
          ? categoryProductsState.data.map((prod) => {
              return {
                ...prod,
              };
            })
          : {};
      // @ts-ignore
      setCategoryProductsData(englishCategoryProductsData);
    }
  }, [lingual, categoryProductsState.done]);

  return (
    <>
      {categoryListState.isLoading && <CatalogPlaceholder />}
      {categoryListState.isSuccess && (
        <div
          // style={{
          //     marginBottom: "100px",
          //     marginTop: "-50px"
          // }}
          className='categoryFilteredContainer'
        >
          <div className='categoryFilteredContainer__filters'>
            {categoryListState.isLoading && <Spinner />}
            {categoryListState.isSuccess &&
              categoryListData &&
              !(categoryListData.length > 0) && <h1>Category Not Found</h1>}

            {categoryListState.isSuccess &&
              categoryListData &&
              categoryListData.length > 0 && (
                <>
                  {/* <div className="select">
                                    <AnotherFilterDropdown
                                        selectedCateoryId={selectedCateoryId}
                                        setSelectedCategoryId={setSelectedCategoryId}
                                        categoryList={categoryListData}
                                        name='Select your category' imgSrc={cow}
                                    />
                                </div> */}

                  <div className='select'>
                    <CategoriesDrawer
                      selectedCateoryId={selectedCateoryId}
                      setSelectedCategoryId={setSelectedCategoryId}
                      categoryList={categoryListState.data}
                      name='Select category'
                    />
                    {/* <h2>Sorting Drawer</h2> */}
                  </div>

                  {categoryListState.isSuccess &&
                    categoryListState.data &&
                    categoryListData.length > 0 &&
                    categoryListData.map((catItem: any) => {
                      return (
                        <div className='filter'>
                          {/* <img className="filter__icon" src={cow} alt="goat" /> */}
                          <FilterDropDown
                            selectedCateoryId={selectedCateoryId}
                            setSelectedCategoryId={setSelectedCategoryId}
                            id={catItem.id}
                            subCategory={catItem.subCategory}
                            name={catItem.name}
                            imgSrc={catItem.icon ? catItem.icon : catItem.cover}
                          />
                        </div>
                      );
                    })}
                </>
              )}
          </div>

          <div className='categoryFilteredContainer__products'>
            {categoryProductsState.done &&
              categoryProductsData &&
              categoryProductsData.length > 0 &&
              categoryProductsData.slice(0, 6).map((product) => {
                return (
                  <div className='categoryFilteredContainer__products__product'>
                    <ProductCard product={product} />
                  </div>
                );
              })}

            {categoryProductsState.done &&
              categoryProductsState.data &&
              !categoryProductsState.data[0] && (
                <h2 className='notFoundComponentForFilterComponent'>
                  No Product has been found!!
                </h2>
              )}

            {categoryProductsState.done && !categoryProductsState.data && (
              <h2 className='notFoundComponentForFilterComponent'>
                No Product has been found!!
              </h2>
            )}

            {categoryProductsState.isLoading && (
              <div className='spinnerComponentForFilterComponent'>
                <Spinner />
              </div>
            )}
          </div>

          {/* <div className="item">
                 <div className="overlay">View All</div>
                 <SingleProductCard />
             </div> */}
        </div>
      )}
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
export default connect(mapStateToProps, mapDispathToProps)(CategoryFiltered);
