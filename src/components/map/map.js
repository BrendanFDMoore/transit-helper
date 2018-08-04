import React, { Component } from 'react';
import { Flex, Box, Text } from 'rebass';

import Network from './network';

const handleMapClick = (msg) => console.log(msg);

const Map = ({ }) =>
<Flex mx={-2}>
  <Box width={1} px={2}>
    <Network onMapClick={handleMapClick} />
  </Box>
</Flex>

export default Map;
