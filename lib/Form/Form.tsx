
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
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value} = props;

  return (
		<div>
      {field && field.map((item)=>(
        <div key={item.name}>
          <span>{item.label}</span>
          <Input type={item.input.type} name={item.name} value={value.name}/>
        </div>
      ))}
    </div>
  )
};

export default Form;
