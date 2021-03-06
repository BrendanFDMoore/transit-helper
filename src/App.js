import React, { Component } from 'react';
import { Provider, Flex, Box } from 'rebass';

import { injectGlobal } from 'styled-components'

import logo from './logo.svg';
import './App.css';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Map from './components/map/map'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
`

class App extends Component {
  render() {
    return (
      <Provider>
        <Flex
          className="App"
          flexDirection="column"
        >
          <Box>
            <Header />
          </Box>
          <Box
            width={1}
          >
            <Map />
          </Box>
        </Flex>
        <Footer />
      </Provider>
    );
  }
}

export default App;
