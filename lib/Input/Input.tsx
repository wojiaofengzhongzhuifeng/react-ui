import * as React from 'react';
import { helps, scopeClass } from '../helpers/helps';
import './style.scss';

const sc = scopeClass('rao-input');

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  addOnAfter?: React.ReactNode
  addOnBefore?: React.ReactNode
  value?: string
  onChange?: React.ChangeEventHandler
  disabled?: boolean
  onPressEnter?: React.KeyboardEventHandler<Element>
}

const Input: React.FunctionComponent<InputProps> = (props)=> {
  const {className, addOnBefore, addOnAfter,width,onChange,disabled,onPressEnter,value,...reset} = props;

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

  const getValue = ()=>{
    return value
  };

  return (
		<span className={sc('wrapper')} style={{width}}>
      {renderBefore()}
      <input
        className={helps(sc(), className)}
        onChange={handleInputChange}
        {...reset}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        value={getValue()}
      />
      {renderAfter()}
    </span>
  )
};

Input.defaultProps = {
  disabled: false
};

export default Input;
