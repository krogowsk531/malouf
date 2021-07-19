import React, { Component } from 'react'
import './App.css';
import WelcomeArea from '../WelcomeArea/WelcomeArea';
import MattressSize from '../MattressSize/MattressSize';
import MattressType from '../MattressType/MattressType';
import ProductCards from '../ProductCards/ProductCards';
import Tips from '../Tips/Tips';
import ProductCardsHorizontalTab from '../ProductCardsHorizontalTab/ProductCardsHorizontalTab'
import WelcomeAreaHorizontalTab from '../WelcomeAreaHorizontalTab/WelcomeAreaHorizontalTab'
import WelcomeAreaPortraitTab from '../WelcomeAreaPortraitTab/WelcomeAreaPortraitTab'


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isDesktop: false,
  //   }
  // 
  //   this.updatePredicate = this.updatePredicate.bind(this)
  // }
  // 
  // componentDidMount() {
  //   this.updatePredicate();
  //   window.addEventListener('resize', this.updatePredicate)
  // }
  // 
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updatePredicate)
  // }
  // 
  // updatePredicate() {
  //   this.setState({ isDesktop: window.innerWidth > 1024 })
  // }
  
  render() {
    // const isDesktop = this.state.isDesktop;
    
    return (
      <div>
        <WelcomeArea />
        <WelcomeAreaHorizontalTab />
        <WelcomeAreaPortraitTab /> 
      {/*<div>
        {isDesktop ? (
          <WelcomeArea />
        ) : (
          <WelcomeAreaHorizontalTab />
        )}
      </div>
      <div>
        {isHorizontalTablet ? (
          <WelcomeAreaHorizontalTab />
        ) : (
          <WelcomeAreaPortraitTab />    
        )}
        </div>
      */}
      <div>
        {/*<MattressSize />
        <MattressType />*/}
        {/*<ProductCards /> */}
        {/*<ProductCardsHorizontalTab /> */}
        {/*<Tips />*/}
      </div>
    </div>
    )
  }
}

export default App;
