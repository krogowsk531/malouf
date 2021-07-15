import React, { Component } from 'react'
import goodThings from './Good Things Come in.png'
import about from './Linenspa mattresses.png'
import bedImg from './Linenspa8inGelStillLife_Pillows Copy (1).png'
import turquoiseSquare from './Rectangle 3 Copy 2.png'
import blueSquareWelcome from './Rectangle 12 Copy.png'



class WelcomeAreaHorizontalTab extends Component {
  render() {
    return (
      <div>
        <img src={goodThings} className='good-things-text' alt='good things come in tall but manageable packages' />
        <img src={about} className='linenspa-text' alt='Linenspa mattresses feature a wide variety of feels and fibers' />
        <img src={turquoiseSquare} className='welcome-turquoise-square' alt='turquoise shadow' />
        <img src={bedImg} className='welcome-bed-img' alt='bed with pillows' />
        <img src={blueSquareWelcome} className='welcome-blue-square' alt='blue square' />
      </div>
    )
  }
}

export default WelcomeAreaHorizontalTab;