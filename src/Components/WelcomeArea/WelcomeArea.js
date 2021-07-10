import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';

class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <img src={mattress} alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



