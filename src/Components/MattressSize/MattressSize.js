import React, { Component } from 'react'
import greySquare from './Rectangle 3 Copy 5.png'
import blueLine from './Line 7 Copy 3.png'
import guideText from './A Guide to Mattress.png'
import twin from './Rectangle 4 Copy 13.png'
import twinXl from './Rectangle 4 Copy 21.png'
import full from './Rectangle 4 Copy 19.png'
import fullXl from './Rectangle 4 Copy 20.png'
import queen from './Rectangle 4 Copy 22.png'
import king from './Rectangle 4 Copy 23.png'
import calKing from './Rectangle 4 Copy 24.png'

class MattressSize extends Component {
  render() {
    return (
      <div>
        <img src={greySquare} className='grey-square' alt='grey square box' />
        <img src={blueLine} className='blue-line' alt='blue line for styling' />
        <img src={guideText} className='guide-text' alt='text for A Guide for Mattress Sizes' />
        <img src={twin} className='twin' alt='icon for twin size bed' />
        <img src={twinXl} className='twin-xl' alt='icon for twin xl size bed' />
        <img src={full} className='full' alt='icon for full size bed' />
        <img src={fullXl} className='full-xl' alt='icon for full xl size bed' />
        <img src={queen} className='queen' alt='icon for queen size bed' />
        <img src={king} className='king' alt='icon for king size bed' />
        <img src={calKing} className='cal-king' alt='icon for california king size bed' />
      </div>
    )
  }
}

export default MattressSize; 
