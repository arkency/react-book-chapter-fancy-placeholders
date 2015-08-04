import './styles.css';
import React from 'react';
import FancyInput from './components/FancyInput';

const DIV1 = document.createElement('div');
document.body.appendChild(DIV1);

React.render(<FancyInput placeholder="First name" />, DIV1);
