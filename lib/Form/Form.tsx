
import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './style.scss';
import Input from '../Input';

const sc = scopeClass('rao-form');

console.log(sc);

interface FormValue{
  [k: string]: string
}

type Type = 'password' | 'checkbox' | 'file' | 'hidden' | 'image' | 'radio' | 'reset' | 'text'

export interface FormField{
  name: string
  label: string
  input: {
    type: Type
  }
}

interface FormProps {
  field: Array<FormField>
  value: FormValue
  buttons: Array<React.ReactElement>
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value, buttons} = props;

  return (
		<div className={sc()}>
      {field && field.map((item)=>(
        <div key={item.name} className={sc('item')}>
          <span className={sc('name')}>{item.label}</span>
          <Input type={item.input.type} name={item.name} value={value.name}/>
        </div>
      ))}
      {buttons && buttons.map((item, key)=>{
        return React.cloneElement(item,{
          key: key
        })
      })}
    </div>
  )
};

export default Form;
