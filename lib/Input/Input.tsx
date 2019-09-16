
import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';

const sc = scopeClass('rao-input');

console.log(sc);

interface InputProps {}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  return (
		<div>Input</div>
  )
};

export default Input;
