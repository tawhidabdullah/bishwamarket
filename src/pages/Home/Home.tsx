import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Collection } from "../../components/Banner/CollectionBanner";
import { CompanyBanner } from "../../components/Banner/CompanyBanner";
import { ContactBanner } from "../../components/Banner/ContactBanner";

//components
import { BrandNav } from "../../components/Navigation/BrandNav";
import { Service } from "../../components/Navigation/ServiceNav";

//con tainer
import { ImageBanner } from "../../containers/ImageBanner";
import { CategorySlider } from "../../containers/Slider/CategorySlider";
import ContentSlider from "../../containers/Slider/ContentSlider/ContentSlider";
import { ProductByCategory } from "../../containers/Slider/ProductByCategory";
import { SpecilaProductSlider } from "../../containers/Slider/SpecilaProductSlider";
// import redux ops
import { globalOperations } from "../../state/ducks/globalState";

const Home = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(globalOperations.openShopByCategory());

    return () => dispatch(globalOperations.closeShopByCategory());
  });

  return (
    <>
      {/* <ImageBanner />
      <BrandNav />
      <Service /> */}
      {/* <CollectionMediaBanner /> */}
      {/* <DiscountBanner /> */}
      {/* <Collection /> */}

      <ProductByCategory />

      <CategorySlider />
      {/* <MediaBannerSlider />
      <LatestBlog /> */}

      <ContentSlider />
      <SpecilaProductSlider />
      <ContactBanner />
      <CompanyBanner />
    </>
  );
};

export default Home;
