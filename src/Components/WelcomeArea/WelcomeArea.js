import React, { Component } from 'react'
import mattress from './Mattresses-HeaderImage.svg';
import square from './Rectangle 12 Copy.png';
import shadow from './Rectangle 3.png'
import welcome from './Good Things Come in.png'
import './WelcomeArea.css';


class WelcomeArea extends Component {
  render() {
    return (
      <div>
        <img src={square} className='blue-box' alt='blue square box' />
        <img src={welcome} className='welcome-text' alt='welcome message' />
        <p className='small-welcome-text'>Linenspa mattresses feature a wide variety of feels and fibers. Firm to plush, memory foam to encased coils—it’s all here. Oh, and did we mention not a single bed is priced over $600? That’s right.</p>
        <img src={shadow} className='mattress-shadow' alt='blue shadow box' />
        <img src={mattress} className='mattress-image' alt='mattress' />
      </div>
    )
  }
}

export default WelcomeArea;



