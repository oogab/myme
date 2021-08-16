import React, { useCallback, useEffect, useState } from 'react';
import Slider from 'react-slick'
import Wrapper from './styles'
import ChallengtItem from '../ChallengeItem'
import { Typography } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useSelector} from 'react-redux'
const App = (props) => {

  let {myChallenges} = useSelector((state)=>{return state.challenge})
  let settings = {
    arrows:false,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return(
    <Wrapper>
      <Typography variant='h5' style={{marginLeft: "26px"}}>나의 챌린지</Typography>
      <div className='slider-div'>
      <Slider {...settings}>
        {
          myChallenges.map((item, idx)=>(<ChallengtItem key={idx} challenge={item} idx={idx}/>))
        }
      </Slider>
      </div>
    </Wrapper>
  );
}
export default App;