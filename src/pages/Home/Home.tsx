import React from "react";

//con tainer
import { ImageBanner } from "../../containers/ImageBanner";
import { MediaBannerSlider } from "../../containers/Slider/MediaBannerSlider";
import { ProductByCategory } from "../../containers/Slider/ProductByCategory";
import { CategorySlider } from "../../containers/Slider/CategorySlider";
import { SpecilaProductSlider } from "../../containers/Slider/SpecilaProductSlider";
import ContentSlider from "../../containers/Slider/ContentSlider/ContentSlider";
import { LatestBlog } from "../../containers/LatestBlog";
import { CollectionMediaBanner } from "../../containers/CollectionMediaBanner";
import { ContactBanner } from "../../components/Banner/ContactBanner";
import { CompanyBanner } from "../../components/Banner/CompanyBanner";

//components
import { BrandNav } from "../../components/Navigation/BrandNav";
import { Service } from "../../components/Navigation/ServiceNav";
import { DiscountBanner } from "../../components/Banner/DiscountBanner";
import { Collection } from "../../components/Banner/CollectionBanner";

const Home = ({products}) => {
  console.log(products, "home");
  return (
    <>
      <ImageBanner />
      <BrandNav />
      <Service />
      <CollectionMediaBanner />
      <DiscountBanner />
      <Collection />

      <ProductByCategory />

      <CategorySlider />
      <MediaBannerSlider />
      <LatestBlog />

      <ContentSlider />
      <SpecilaProductSlider products={products} />
      <ContactBanner />
      <CompanyBanner />
    </>
  );
};

export default Home;
