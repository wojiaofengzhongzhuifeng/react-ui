
import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';

const sc = scopeClass('rao-input');

console.log(sc);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  const {className, ...reset} = props;
  return (
		<input className={classes(sc(), className)} {...reset}/>
  )
};

export default Input;
