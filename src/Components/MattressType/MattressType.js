import React, { Component } from 'react'
import rectangle from './Rectangle 3 Copy 3.png'
import memoryFoam from './Memory Foam Feature Copy.png'
import latexFoam from './Latex foam feature Copy.png'
import spring from './Spring Feature Copy.png'
import hybrid from './Hybrid Feature Copy.png'

class MattressType extends Component {
  render() {
    return (
      <div>
        <img src={rectangle} className='blue-rectangle' alt='blue rectangle box' />
        <img src={memoryFoam} className='memory-foam' alt='memory foam mattress info' />
        <img src={latexFoam} className='latex-foam' alt='latex foam mattress info' />
        <img src={spring} className='spring' alt='spring mattress info' />
        <img src={hybrid} className='hybrid' alt='hybrid mattress info' />
      </div>
    )
  }
}

export default MattressType; 
