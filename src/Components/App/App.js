import React, { Component } from 'react'
import './App.css';
import WelcomeArea from '../WelcomeArea/WelcomeArea';
import MattressSize from '../MattressSize/MattressSize';
import MattressType from '../MattressType/MattressType';
import ProductCards from '../ProductCards/ProductCards';


class App extends Component {
  render() {
    return (
      <div>
        <WelcomeArea />
        <MattressSize />
        <MattressType />
        <ProductCards />
        <Tips />
      </div>
    )
  }
}

export default App;
