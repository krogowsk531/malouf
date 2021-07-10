import React, { Component } from 'react'
import './App.css';
import WelcomeArea from '../WelcomeArea/WelcomeArea';
import MattressSize from '../MattressSize/MattressSize';
import MattressType from '../MattressType/MattressType';


class App extends Component {
  render() {
    return (
      <div>
        <WelcomeArea />
        <MattressSize />
        <MattressType />
      </div>
    )
  }
}

export default App;
