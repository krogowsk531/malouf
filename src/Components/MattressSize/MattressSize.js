import React, { Component } from 'react'
import blueLine from './Line 7 Copy 3.png'
import guideText from './A Guide to Mattress.png'
import twin from './Rectangle 4 Copy 13.png'
import twinXl from './Rectangle 4 Copy 21.png'
import full from './Rectangle 4 Copy 19.png'
import fullXl from './Rectangle 4 Copy 20.png'
import queen from './Rectangle 4 Copy 22.png'
import king from './Rectangle 4 Copy 23.png'
import calKing from './Rectangle 4 Copy 24.png'
import twinDescription from './Actual_ 37.5 x 74 in.png'
import './MattressSize.css';
import twinText from './Twin Copy.png'
import twinXlText from './Twin XL Copy.png'
import fullText from './FULL Copy.png'
import fullXlText from './FULL XL Copy.png'
import queenText from './Queen Copy.png'
import kingText from './King Copy.png'
import calKingText from './Cal King Copy.png'
import twinImg from './BedShot.png'



class MattressSize extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      currentImageIndex: 0
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  
  previousSlide () {
    const lastIndex = imgUrls.length -1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex -1;
    
    this.setState({
      currentImageIndex: index 
    });
  }
  
  nextSlide () {
    const lastIndex = imgUrls.length -1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    
    this.setState({
      currentImageIndex: index 
    })
  }
  
  render() {
    return (
      <div>
        <div className='carousel'>
          <Arrow 
            direction='left'
            clickFunction={ this.previousSlide }
            character='&#9664'
          />
          <Slide photo={ imgUrls[this.state.currentImageIndex] } />
          <Arrow 
            direction='right'
            clickFunction={ this.nextSlide }
            character='&#9654'
          />
        </div>
        <img src={twinImg} className='twin-image' alt='twin bed' />
        <img src={blueLine} className='blue-line' alt='blue line for styling' />
        <img src={guideText} className='guide-text' alt='text for A Guide for Mattress Sizes' />
        <img src={twin} className='twin' alt='icon for twin size bed' />
        <img src={twinText} className='twin-text' alt='text to indicate shape is a twin bed' />
        <img src={twinXl} className='twin-xl' alt='icon for twin xl size bed' />
        <img src={twinXlText} className='twin-xl-text' alt='text to indicate shape is a twin xl bed' />
        <img src={full} className='full' alt='icon for full size bed' />
        <img src={fullText} className='full-text' alt='text to indicate shape is a full bed' />
        <img src={fullXl} className='full-xl' alt='icon for full xl size bed' />
        <img src={fullXlText} className='full-xl-text' alt='text to indicate shape is a full xl bed' />
        <img src={queen} className='queen' alt='icon for queen size bed' />
        <img src={queenText} className='queen-text' alt='text to indicate shape is a queen bed' />
        <img src={king} className='king' alt='icon for king size bed' />
        <img src={kingText} className='king-text' alt='text to indicate shape is a king bed' />
        <img src={calKing} className='cal-king' alt='icon for california king size bed' />
        <img src={calKingText} className='cal-king-text' alt='text to indicate shape is a california king bed' />
        <img src={twinDescription} className='twin-description' alt='text to describe the twin mattress' />
      </div>
    )
  }
}

export default MattressSize; 
