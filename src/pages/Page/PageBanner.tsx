import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import { useHistory } from 'react-router';
import config from '../../config.json';
// import hooks
import { useQueryFetch } from '../../hooks';




const Banner = (props) => {
  const history = useHistory();
  const bannerState = useQueryFetch('banner');

  return (
    <div className='pageBannerContainer' style={{ display: 'block' }}>
      <div
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <img
          src={`${config.baseURL}${props.full}`}
          alt=''
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '95vh',
          }}
        />
      </div>

      <div className='pageBannerContainer__overlay'>
        <h1 className='pageBannerContainer__overlay__title'>{props.name}</h1>
        {/* <BreadCrumb /> */}
      </div>
    </div>
  );
};

export default Banner;
