
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
        <span className={sc('addon')}>{addOnBefore}</span>
      )
    } else {
      return null
    }
  };

  const renderAfter = ()=>{
    if(addOnAfter){
      return (
        <span  className={sc('addon')}>{addOnAfter}</span>
      )
    } else {
      return null
    }
  };

  return (
		<span className={sc('wrapper')}>
      {renderBefore()}
      <input className={classes(sc(), className)} {...reset}/>
      {renderAfter()}
    </span>
  )
};

export default Input;
