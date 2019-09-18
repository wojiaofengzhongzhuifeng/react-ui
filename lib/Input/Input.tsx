import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';

const sc = scopeClass('rao-input');

console.log(sc);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  addOnAfter?: React.ReactNode
  addOnBefore?: React.ReactNode
  value?: string
  onChange?: React.ChangeEventHandler
  disabled?: boolean
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  const {className, addOnBefore, addOnAfter,width,onChange,disabled,onPressEnter,...reset} = props;

  const handleKeyDown = (event: React.KeyboardEvent)=>{
    if(event.key === 'Enter'){
      console.log('点击了 enter');
      onPressEnter && onPressEnter(event)
    }
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    onChange && onChange(e);
  };

  return (
		<span className={sc('wrapper')} style={{width}}>
      {renderBefore()}
      <input
        className={classes(sc(), className)}
        onChange={handleInputChange}
        {...reset}
        disabled={disabled}
        onKeyDown={handleKeyDown}
      />
      {renderAfter()}
    </span>
  )
};

Input.defaultProps = {
  disabled: false
};

export default Input;
