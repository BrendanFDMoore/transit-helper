import React, { Component } from 'react';
import { Banner, Heading, Fixed, BlockLink, Image, Flex, Box, Text } from 'rebass';

import Disclaimer from '../disclaimer/disclaimer';

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
    
      <Flex
        alignItems='center'
        justifyContent='flex-end'
        pr={4}
      >
        <Box>
          <Disclaimer />
        </Box>
        <Box flex={1}>
          <Text
            m={1}
            p={1}
            f={[ 1,1,2,2 ]}
            textAlign='center'
            children='Schedules as of Sept 2018'
          />
        </Box>
        <Box>
          <BlockLink
            href='https://github.com/BrendanFDMoore/transit-helper'
            target='_blank'
          >
            <Text
              m={1}
              p={1}
              f={[ 1,1,2,3 ]}
              children='Made by Brendan Moore'
            />
          </BlockLink>
        </Box>
        <Box>
          <BlockLink
            href='https://github.com/BrendanFDMoore/transit-helper'
            target='_blank'
          >
            <Image src={githubLogo} width={24}/>
          </BlockLink>
        </Box>
      </Flex>
  </Fixed>

export default Footer;
