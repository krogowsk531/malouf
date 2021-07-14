import React, { Component } from 'react'
import tileInfo from '../ProductCards/CardBack-white Copy 2 (1).png'
import blueTile from '../ProductCards/Rectangle 5 Copy.png'
import dreamText from '../ProductCards/Do not give up on you.png'
import purpleTile2 from './LS10_45GF-10inGel-Card Copy.png'
import purpleTile from '../ProductCards/Group 3.png'
import colbaltTile from '../ProductCards/Group 5 Copy.png'
import yellowTile3 from './LS06_GRSP-6inSpring-front.png'
import yellowTile2 from '../ProductCards/Group Copy.png'
import greenTile3 from './LS08_MFSP-8inHybrid-Card2.png'
import greenTileText from './8” Spring and Memory.png'
import blueTile2 from '../ProductCards/Rectangle 5.png'
import easySleepText from '../ProductCards/Sleep will be so eas.png'


class ProductCardsHorizontalTab extends Component {
  render() {
    return (
      <div>
        <img src={tileInfo} className='tile-info-ht' alt='info about the product on hover' />
        <img src={blueTile} className='blue-tile-ht' alt='blue tile for background to text' />
        <img src={dreamText} className='dream-text-ht' alt='text about dreaming' />
        <img src={purpleTile2} className='purple-tile-2-ht' alt='gel memory foam mattress' />
        <img src={purpleTile} className='purple-tile-ht' alt='info about gel memory foam mattress' />
        <img src={colbaltTile} className='colbalt-tile-ht' alt='info about five inch gel memory foam mattress' />
        <img src={yellowTile3} className='yellow-tile-three-ht' alt='inner spring mattress' />
        <img src={yellowTile2} className='yellow-tile-two-ht' alt='info about inner spring mattress' />
        <img src={greenTile3} className='green-tile-three-ht' alt='hybrid mattress' />
        <img src={greenTileText} className='green-tile-text-ht' alt='info about hybrid mattress' />
        <img src={blueTile2} className='blue-tile-two-ht' alt='blue tile for background to text' />
        <img src={easySleepText} className='easy-sleep-text-ht' alt='text about ease of sleep' />
      </div>
    )
  }
}

export default ProductCardsHorizontalTab;
