import React, { Component } from "react";
import { Box, Text } from "rebass";

const ComingSoon = ({ text }) => (
  <Box
    px={3}
    py={4}
    color='white'
    bg='darkgray'
  >
    <Text textAlign='center'>{`${text} Coming Soon!`}</Text>
  </Box>
);

export default ComingSoon;
