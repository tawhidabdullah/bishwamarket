import React from 'react'
import  {ImageBanner} from "../../containers/ImageBanner"
import {BrandNav} from "../../components/Navigation/BrandNav"
import {Service} from "../../components/Navigation/ServiceNav"
import {DiscountBanner} from "../../components/Banner/DiscountBanner"
import {Collection} from"../../components/Banner/CollectionBanner"
const Home = () => {
    return (
       <>
            <ImageBanner />
            <BrandNav />
            <Service />
            <DiscountBanner />
            <Collection />
      </>
    )
}

export default Home
