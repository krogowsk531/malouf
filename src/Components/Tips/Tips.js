import React, { Component } from 'react'
import thinBlueLine from './Line 7.png'
import soulMateText from './How to Find Your Mat.png'
import tip1 from './Group 2.png'
import tip2 from './Group 2 Copy.png'
import tip3 from './Group 2 Copy 2.png'
import './Tips.css';

class Tips extends Component {
  render() {
    return (
      <div>
        <img src={thinBlueLine} className='thin-blue-line' alt='blue line used for styling' />
        <img src={soulMateText} className='soul-mate-text' alt='text about finding your mattress soul mate' />
        <img src={tip1} className='tip-one' alt='tip to identify your body type' />
        <img src={tip2} className='tip-two' alt='tip to consider your sleep position' />
        <img src={tip3} className='tip-three' alt='tip to determine your preference' />
      </div>
    )
  }
}

export default Tips;