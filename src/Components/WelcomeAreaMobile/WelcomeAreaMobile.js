import React, { Component } from 'react'
import goodThingsMobile from './Good Things Come in.png'
import bedImgMobile from './Linenspa8inGelStillLife_Pillows Copy 3.png'
import smallTextMobile from './Lorem ipsum dolor si Copy 4.png'
import tealShadowMobile from './Rectangle 3 Copy 4.png'
import blueSquareMobile from './Rectangle 12 Copy 3.png' 


class WelcomeAreaMobile extends Component {
  render() {
    return (
      <div>
        <img src={goodThingsMobile} className='good-things-mobile' alt='good things come in tall but manageable packages' />
        <img src={smallTextMobile} className='linenspa-text-mobile' alt='Linenspa mattresses feature a wide variety of feels and fibers' />
        <img src={tealShadowMobile} className='turquoise-square-mobile' alt='turquoise shadow' />
        <img src={bedImgMobile} className='bed-img-mobile' alt='bed with pillows' />
        <img src={blueSquareMobile} className='blue-square-mobile' alt='blue square' />
      </div>
    )
  }
}

export default WelcomeAreaMobile;