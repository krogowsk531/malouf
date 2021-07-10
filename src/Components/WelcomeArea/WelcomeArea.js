import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';

class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <img src={mattress} className='mattress-image' alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



