import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Router from './Router';
const ReactDOM = require('react-dom');
require('./index.css');

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);
