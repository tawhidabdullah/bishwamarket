import React from 'react';
import bag from '../../assets/bag.svg';
import wefol from '../../assets/wefol.png';

// import states
import { sessionOperations } from '../../state/ducks/session';
import { lingualOperations } from '../../state/ducks/lingual';

// import lib
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import hooks
import { useQueryFetch } from '../../hooks';

const WeFollow = ({ lingual }) => {
  const history = useHistory();
  const weFollowImage = useQueryFetch('weFollowImage');

  return (
    <div className='weFollowContainer'>
      <div
        className='weFollowContainer__image'
        style={{
          backgroundImage: `url(${
            weFollowImage.isLoading ||
            weFollowImage.isError ||
            !(Object.keys(weFollowImage.data).length > 0)
              ? wefol
              : weFollowImage.data &&
                weFollowImage.data[0] &&
                weFollowImage.data[0]['src']
          })`,
        }}
      ></div>
      <div className='weFollowContainer__weFollow'>
        <div className='weFollowContainer__weFollow__contents'>
          <h4 className='title'>
            {lingual.isBangla
              ? 'আমরা ১০০% হালাল সিস্টেম অনুসরণ করি'
              : 'We Follow 100% Halal System'}
          </h4>
          <p className='desc'>
            {lingual.isBangla
              ? `লরেম ইপসামের প্যাসেজের বিভিন্ন প্রকারের উপস্থিতি রয়েছে, তবে বেশিরভাগই ইনজেকশনের মাধ্যমে রীতিমতো কিছু আকারে পরিবর্তনের শিকার হয়েছেন
                        `
              : `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour`}
          </p>
          <div onClick={() => history.push('/products')} className='button'>
            <img className='btnImage' src={bag} alt='' />
            {lingual.isBangla ? 'এখনই কিনুন' : 'Shop Now'}
          </div>
        </div>
      </div>
    </div>
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
export default connect(mapStateToProps, mapDispathToProps)(WeFollow);
