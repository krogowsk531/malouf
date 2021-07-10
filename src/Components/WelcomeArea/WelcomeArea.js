import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';
import square from './Rectangle 12 Copy.png';
import shadow from './Rectangle 3.png'
import welcome from './Good Things Come in.png'
import linenspa from './Linenspa mattresses.png'
import './WelcomeArea.css';


class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <img src={square} className='blue-box' alt='blue square box' />
        <img src={welcome} className='welcome-text' alt='welcome message' />
        <img src={linenspa} className='small-welcome-text' alt='Info about Linenspa mattresses'/>
        <img src={shadow} className='mattress-shadow' alt='blue shadow box' />
        <img src={mattress} className='mattress-image' alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



