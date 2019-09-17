
import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';

const sc = scopeClass('rao-input');

console.log(sc);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  addOnAfter?: React.ReactNode
  addOnBefore?: React.ReactNode
}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  const {className, addOnBefore, addOnAfter,...reset} = props;

  const renderBefore = ()=>{
    if(addOnBefore){
      return (
        <span>{addOnBefore}</span>
      )
    } else {
      return null
    }
  };

  const renderAfter = ()=>{
    if(addOnAfter){
      return (
        <span>{addOnAfter}</span>
      )
    } else {
      return null
    }
  };

  return (
		<React.Fragment>
      {renderBefore()}
      <input className={classes(sc(), className)} {...reset}/>
      {renderAfter()}
    </React.Fragment>
  )
};

export default Input;
