import React, { Component } from 'react';
import { Flex, Box, Text } from 'rebass';

import Network from './network';
import StationDetail from '../station-detail/station-detail';


class Map extends Component {
  constructor() {
    super();
    this.state = { showStation: null };
  }

  handleMapClick = (station) => {
    console.log('handleMapClick', station);
    this.setState({showStation: station});
  };

  handleModalClick = () => {
    console.log('handleModalClick');
    this.setState({showStation: null});
  };

  render() {
    const { showStation } = this.state;
    return (
      <Flex mx={-2}>
        <Box width={1} px={2}>
          {showStation && <StationDetail station={showStation} onModalClick={this.handleModalClick} />}
          <Network onMapClick={this.handleMapClick} />
        </Box>
      </Flex>
    );
  }
}

export default Map;
