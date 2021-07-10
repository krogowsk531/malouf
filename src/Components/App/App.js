import React, { Component } from 'react'
import './App.css';
import WelcomeArea from '../WelcomeArea/WelcomeArea';
import MattressSize from '../MattressSize/MattressSize';


class App extends Component {
  render() {
    return (
      <div>
        <WelcomeArea />
        <MattressSize />
      </div>
    )
  }
}

export default App;
