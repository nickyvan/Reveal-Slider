import React, { Component } from 'react';
import './App.css';
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import img5 from './Images/5.jpg';
import SlideShow from './controllers/SlideShow'
class App extends Component {
  componentDidMount(){
    new SlideShow(document.getElementsByClassName('slides')[0]);
  }
  render() {
    return (
      <div className="App">
        <div className="slides">
          <div className="nav nav--prev"></div>
          <div className="nav nav--next"></div>
          <div className="slide slide--current">
            <div
              className="slide__img slide__img-size1"
              style={{backgroundImage: `url(${img1})`}}
            />
          </div>
          <div className="slide">
            <div
              className="slide__img slide__img-size2"
              style={{backgroundImage: `url(${img2})`}}
            />
          </div>
          <div className="slide">
            <div
              className="slide__img slide__img-size1"
              style={{backgroundImage: `url(${img3})`}}
            />
          </div>
          <div className="slide">
            <div
              className="slide__img slide__img-size3"
              style={{backgroundImage: `url(${img4})`}}
            />
          </div>
          <div className="slide">
            <div
              className="slide__img slide__img-size2"
              style={{backgroundImage: `url(${img5})`}}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
