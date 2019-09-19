
import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './style.scss';
import Input from '../Input';

const sc = scopeClass('rao-form');

export interface FormValue{
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
  onChange?: any
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value, buttons, onChange} = props;

  const handleInputChange = (formKey: string, formValue: string)=>{
    const newValue = {...value, [formKey]: formValue}
    onChange && onChange(newValue);
  };

  return (
		<div className={sc()}>
      {field && field.map((item)=>(
        <div key={item.name} className={sc('item')}>
          <span className={sc('name')}>{item.label}</span>
          <Input
            type={item.input.type}
            name={item.name}
            value={value[item.name]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{handleInputChange(item.name, e.target.value)}}
          />
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
