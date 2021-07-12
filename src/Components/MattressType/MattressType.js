import React, { Component } from 'react'
import rectangle from './Rectangle 3 Copy 3.png'
import memoryFoam from './Memory Foam Feature Copy.png'
import latexFoam from './Latex foam feature Copy.png'
import spring from './Spring Feature Copy.png'
import hybrid from './Hybrid Feature Copy.png'
import text from './Whats Your Type.png'
import whiteLine from './Line 7 Copy.png'
import './MattressType.css';


class MattressType extends Component {
  render() {
    return (
      <div>
        <img src={rectangle} className='blue-rectangle' alt='blue rectangle box' />
        <img src={text} className='text' alt='text whats your type' />
        <img src={whiteLine} className='white-line' alt='white line for style' />
        <img src={memoryFoam} className='memory-foam' alt='memory foam mattress info' />
        <img src={latexFoam} className='latex-foam' alt='latex foam mattress info' />
        <img src={spring} className='spring' alt='spring mattress info' />
        <img src={hybrid} className='hybrid' alt='hybrid mattress info' />
      </div>
    )
  }
}

export default MattressType; 



