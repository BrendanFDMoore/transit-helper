import React, { Component } from 'react';
import { Banner, Heading, Fixed, BlockLink, Image, Flex, Box, Text } from 'rebass';

import githubLogo from './github.svg'

const Footer = ({ }) =>
  <Fixed
    m={0}
    p={1}
    bg='white'
    zIndex={1}
    left={0}
    right={0}
    bottom={0}
  >
    <BlockLink
      href='https://github.com/BrendanFDMoore/transit-helper'
      target='_blank'
    >
      <Flex
        alignItems='center'
        justifyContent='flex-end'
      >
        <Box>
          <Text
            m={1}
            p={1}
            f={[ 1,2,3,4 ]}
            children='Made by Brendan Moore'
          />
        </Box>
        <Box>
          <Image src={githubLogo} width={24}/>
        </Box>
      </Flex>
    </BlockLink>
  </Fixed>

export default Footer;
