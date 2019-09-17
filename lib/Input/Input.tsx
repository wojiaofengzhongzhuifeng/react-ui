
import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';

const sc = scopeClass('rao-input');

console.log(sc);

interface InputProps extends React.HTMLAttributes<InputProps>{
  defaultValue: string
  disabled: boolean
  value: string
  onPressEnter: React.KeyboardEventHandler
}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  return (
		<input />
  )
};

export default Input;
