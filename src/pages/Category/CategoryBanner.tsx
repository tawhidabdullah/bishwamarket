import React from 'react';



const CategoryBanner = ({ categoryDetailData }) => {
    return (
        <>
            <div className="categoryBannerContainer">
                {/* <div className='categoryBannerContainer__backgroundColor'></div> */}
                <img
                    className='categoryBannerContainer__img'
                    src={categoryDetailData?.cover || categoryDetailData?.thumbnail || categoryDetailData?.icon} alt="banner img" />

                {/* <div className="categoryBannerContainer__overlay">
                    
                    <p className="categoryBannerContainer__overlay__description">{categoryDetailData.description}</p>
                </div> */}
            </div>
            <div className="text-center my-5">
                <hr/>
                <h1 className="m-0 f700">{categoryDetailData.name}</h1>
                <hr/>
            </div>
        </>

    );
};

export default CategoryBanner;