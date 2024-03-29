import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Collection } from "../../components/Banner/CollectionBanner";
import { CompanyBanner } from "../../components/Banner/CompanyBanner";
import { ContactBanner } from "../../components/Banner/ContactBanner";

//components
import { BrandNav } from "../../components/Navigation/BrandNav";
import { Service } from "../../components/Navigation/ServiceNav";
import { CollectionMediaBanner } from "../../containers/CollectionMediaBanner";
import { DiscountBanner } from "../../components/Banner/DiscountBanner";

//container
import { ImageBanner } from "../../containers/ImageBanner";
import { CategorySlider } from "../../containers/Slider/CategorySlider";
import ContentSlider from "../../containers/Slider/ContentSlider/ContentSlider";
import { ProductByCategory } from "../../containers/Slider/ProductByCategory";
import { SpecilaProductSlider } from "../../containers/Slider/SpecilaProductSlider";
import { NewProduct } from "../../containers/NewProduct";
import { DiscountProduct } from "../../containers/DiscountProduct";

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
      <ImageBanner />
      <BrandNav />
      <Service />
      <CollectionMediaBanner />
      <DiscountBanner />
      <DiscountProduct />
      <Collection />

      <ProductByCategory />

      <CategorySlider />

      <ContentSlider />
      <SpecilaProductSlider />
      <NewProduct />
      <ContactBanner />
      <CompanyBanner />
    </>
  );
};

export default Home;
