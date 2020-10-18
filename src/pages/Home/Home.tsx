
import React from 'react'

//con tainer
import  {ImageBanner} from "../../containers/ImageBanner"
import {MediaBannerSlider} from "../../containers/Slider/MediaBannerSlider"
import {SimpleSlider} from "../../containers/Slider/Simpleslider"
import {CategorySlider} from "../../containers/Slider/CategorySlider"
import {SpecilaProductSlider} from "../../containers/Slider/SpecilaProductSlider"
import ContentSlider  from "../../containers/Slider/ContentSlider/ContentSlider"
import {LatestBlog} from "../../containers/LatestBlog"
import {CollectionMediaBanner} from "../../containers/CollectionMediaBanner"



//components
import {BrandNav} from "../../components/Navigation/BrandNav"
import {Service} from "../../components/Navigation/ServiceNav"
import {DiscountBanner} from "../../components/Banner/DiscountBanner"
import {Collection} from"../../components/Banner/CollectionBanner"
import {Productcontain} from "../../components/Navigation/ProductConatain"
import {DealBanner} from "../../components/Banner/DealBanner"
const Home = () => {
    return (
      <>
        <ImageBanner />
        <BrandNav />
        <Service />
        <DiscountBanner />
        <Collection />
        {/* <Productcontain />
        <SimpleSlider /> */}

        <DealBanner />

        {/* <CategorySlider /> */}
        <MediaBannerSlider />
        <LatestBlog />

        <ContentSlider />
        <SpecilaProductSlider />
        <CollectionMediaBanner />
      </>
    );
}

export default Home;
