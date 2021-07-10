import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';
import './WelcomeArea.css';


class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <p className='welcome-text'>Good Things Come in Tall But Manageable Packages</p>
        <img src={mattress} className='mattress-image' alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



