import React, { Component } from 'react';
import { Flex, Box, Text } from 'rebass';

import Network from './network';

const Map = ({ }) =>
<Flex mx={-2}>
  <Box width={1} px={2}>
    <Network />
  </Box>
</Flex>

export default Map;
