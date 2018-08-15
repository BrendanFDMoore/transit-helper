import React, { Component } from 'react';
import { Banner, Heading } from 'rebass';
import styled from "styled-components";

const Header = ({ title = 'When Is My Train?', className }) =>
<Banner
  className={className}
  color='white'
  minHeight={['75px','100px','125px','150px']}
  bg='darken'
  backgroundImage='https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&rect=0%2C0%2C5335%2C3000&fit=crop&ixid=eyJhcHBfaWQiOjMzMTc3fQ&s=64468127f8ac05254abf08fbdcc037a6&w=2000'
>
  <Heading
    fontSize={[ 5, 6, 7, 8 ]}>
    {title}
  </Heading>
</Banner>

export default styled(Header)`
  text-shadow: 5px 5px 5px black;
`;;
