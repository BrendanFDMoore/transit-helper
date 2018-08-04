import React, { Component } from 'react';
import { Provider } from 'rebass';

import { injectGlobal } from 'styled-components'

import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Map from './components/map/map'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Map />
        </div>
      </Provider>
    );
  }
}

export default App;
