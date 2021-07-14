import React, { Component } from 'react'
import './App.css';
import WelcomeArea from '../WelcomeArea/WelcomeArea';
import MattressSize from '../MattressSize/MattressSize';
import MattressType from '../MattressType/MattressType';
import ProductCards from '../ProductCards/ProductCards';
import Tips from '../Tips/Tips';
import ProductCardsHorizontalTab from '../ProductCardsHorizontalTab/ProductCardsHorizontalTab'


class App extends Component {
  render() {
    return (
      <div>
        {/* <WelcomeArea />*/}
        <WelcomeAreaHorizontalTab />
        <MattressSize />
        <MattressType />
        {/*<ProductCards /> */}
        <ProductCardsHorizontalTab />
        <Tips />
      </div>
    )
  }
}

export default App;
