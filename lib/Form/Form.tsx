
import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './style.scss';
import Input from '../Input';

const sc = scopeClass('rao-form');

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
  // todo 能渲染 value 的值
  value: FormValue
  buttons: Array<React.ReactElement>
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value, buttons} = props;

  console.log(value);

  return (
		<div className={sc()}>
      {field && field.map((item)=>(
        <div key={item.name} className={sc('item')}>
          <span className={sc('name')}>{item.label}</span>
          <Input type={item.input.type} name={item.name} value={'test'}/>
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
