import React, { Component } from 'react';
import {Link} from 'react-router-dom'

import {Helmet} from "react-helmet";

export default () => {
  return(
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page1</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <p>page1</p>
      <Link to='/'>to home</Link>
    </div>
  )
}