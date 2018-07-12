import React, { Component } from 'react';
import { render } from 'react-dom';

import 'bootstrap';
import Aplication from './components/aplication.jsx'
import './scss/app.scss'


render(
    <Aplication/>,
    document.getElementById('app')
)