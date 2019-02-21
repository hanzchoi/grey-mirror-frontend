import React, { Component } from 'react';
import Clarifai from 'clarifai';
import CLARIFI_API_KEY from './credentials.js'
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
 apiKey: CLARIFI_API_KEY
});

const particlesOption = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }


  onButtonSubmit = () => {
    app.models
      .predict(
      Clarifai.COLOR_MODEL,
          "https://samples.clarifai.com/metro-north.jpg"
      )
      .then(function(response) {
          // do something with responseconsole.log(response);
          console.log(response)
          },
          function(err) {// there was an error
          }
      );
  }

  render() {
    return (
      <div className="App">
      <Particles className='particles' params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
      </div>
    );
  }
}

export default App;
