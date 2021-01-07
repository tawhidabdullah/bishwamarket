import React from 'react';
import { useHistory } from "react-router-dom";



const CategorySubCategories = ({ categoryDetailData }) => {
    const history = useHistory(); 
    return (
             <>
             <div className='ml-3'>
             {categoryDetailData.subCategory && categoryDetailData.subCategory.length > 0 && (
              <>
              {categoryDetailData.subCategory.map((sub: any) => {
              return (
                <div
                style={{
                  cursor: 'pointer',
                }}
                onClick={() =>
                  {
                    sub.url &&
                      history.push({
                          pathname: `/category/${sub.url.replace('/category/', '')}`,
                          state: {
                          catId: sub.id,
                          }
                        })
                      }
                  }
                className='popularCategory'
              >
                <div className='popularCategory__popularCategoryImage'>
                  <img src={sub.thumbnail || sub.cover} alt='' />
                </div>
                <div className='popularCategory__popularCategoryTitle'>
                  <h5 className="f700 mt-3">
                    {sub.name}
                  </h5>
                </div>
              </div>
              );
            })}
            </>
        )}
          </div>
        </>
     

    );
};

export default CategorySubCategories;