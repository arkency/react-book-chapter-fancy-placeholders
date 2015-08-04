import './styles.css';
import React from 'react';
import FancyInput from './components/FancyInput';

const DIV1 = document.createElement('div');
document.body.appendChild(DIV1);
const DIV2 = document.createElement('div');
document.body.appendChild(DIV2);

React.render(<FancyInput />, DIV1);
React.render(<FancyInput stamp="true" />, DIV2);