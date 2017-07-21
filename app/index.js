import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import FancyInput from './components/FancyInput';

const DIV = document.createElement('div');
document.body.appendChild(DIV);

ReactDOM.render(<FancyInput placeholder="First name"/>, DIV);
