import React, { Component } from 'react'
import goodThingsTb from './Good Things Come in.png'
import mattressImgTb from './Linenspa8inGelStillLife_Pillows Copy 2.png'
import mattressInfoTb from './Lorem ipsum dolor si.png'
import blueSquareTb from './Rectangle 12 Copy 2.png'
import tealSquareTb from './Rectangle 3 Copy 3.png'


class WelcomeAreaPortraitTab extends Component {
  render() {
    return (
      <div>
        <img src={goodThingsTb} className='good-things-text-tb' alt='good things come in tall but manageable packages' />
        <img src={mattressInfoTb} className='linenspa-text-tb' alt='Linenspa mattresses feature a wide variety of feels and fibers' />
        <img src={tealSquareTb} className='teal-square-tb' alt='turquoise shadow' />
        <img src={mattressImgTb} className='mattress-img-tb' alt='bed with pillows' />
        <img src={blueSquareTb} className='blue-square-tb' alt='blue square' />
      </div>
    )
  }
}

export default WelcomeAreaPortraitTab;