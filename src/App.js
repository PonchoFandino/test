import React, { Component } from 'react';
import me from './image/me.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div  className="preCenter">
        <div className="center">
          <img src={me} className="foto" alt="foto" />
          <br/>
          <h1>Alfonso Fandiño</h1>
          <p>Bogota, Colombia.</p>
        </div>
      </div>
    );
  }
}

export default App;
