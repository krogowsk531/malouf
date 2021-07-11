import React, { Component } from 'react'
import whiteBackground from './Rectangle 3 Copy 4.png'
import tileInfo from './CardBack-white Copy 2 (1).png'
import purpleTile from './Group 3.png'
import yellowTile from './Group.png'
import blueTile from './Rectangle 5 Copy.png'
import dreamText from './Do not give up on you.png'
import greenTile from './Group 4.png'
import colbaltTile from './Group 5 Copy.png'
import greenTile2 from './Group 4 Copy.png'
import yellowTile2 from './Group Copy.png'
import blueTile2 from './Rectangle 5.png'
import easySleepText from './Sleep will be so eas.png'


class ProductCards extends Component {
  render() {
    return (
      <div>
        <img src={whiteBackground} className='white-background' alt='white rectangle to hold the product cards' />
        <img src={tileInfo} className='tile-info' alt='info about the product on hover' />
        <img src={purpleTile} className='purple-tile' alt='info about gel memory foam mattress' />
        <img src={yellowTile} className='yellow-tile' alt='info about inner spring mattress' />
        <img src={blueTile} className='blue-tile' alt='blue tile for background to text' />
        <img src={dreamText} className='dream-text' alt='text about dreaming' />
        <img src={greenTile} className='green-tile' alt='info about hybrid mattress' />
        <img src={colbaltTile} className='colbalt-tile' alt='info about five inch gel memory foam mattress' />
        <img src={greenTile2} className='green-tile-two' alt='info about hybrid mattress' />
        <img src={yellowTile2} className='yellow-tile-two' alt='info about inner spring mattress' />
        <img src={blueTile2} className='blue-tile-two' alt='blue tile for background to text' />
        <img src={easySleepText} className='easy-sleep-text' alt='text about ease of sleep' />
      </div>
    )
  }
}

export default ProductCards;