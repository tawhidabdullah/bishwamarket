
import React from 'react'
import  {ImageBanner} from "../../containers/ImageBanner"
import {SimpleSlider} from "../../containers/Slider/Simpleslider"
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
        <Productcontain />
        <SimpleSlider />

        <DealBanner />
      </>
    );
}

export default Home;
