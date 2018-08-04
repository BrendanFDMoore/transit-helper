import React, { Component } from 'react';
import { Banner, Heading } from 'rebass';

const Header = ({ title = 'Transit Helper' }) =>
<Banner
  color='white'
  minHeight='200px'
  bg='darken'
  backgroundImage='https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&rect=0%2C0%2C5335%2C3000&fit=crop&ixid=eyJhcHBfaWQiOjMzMTc3fQ&s=64468127f8ac05254abf08fbdcc037a6&w=2000'
>
  <Heading
    f={[ 4, 5, 6, 7 ]}>
    {title}
  </Heading>
</Banner>

export default Header;
