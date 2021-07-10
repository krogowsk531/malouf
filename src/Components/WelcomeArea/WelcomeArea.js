import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';
import square from './Rectangle 12 Copy.png';
import './WelcomeArea.css';


class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <img src={square} className='blue-box' alt='blue-square-box' />
        <p className='welcome-text'>Good Things Come in Tall But Manageable Packages</p>
        <div className='mattress-shadow'></div>
        <img src={mattress} className='mattress-image' alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



