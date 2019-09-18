
import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import './style.scss';
import Input from '../Input';

const sc = scopeClass('rao-form');

console.log(sc);

interface FormProps {
  field: any
  value: any
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value} = props;

  return (
		<div>
      {field && field.map((item)=>(
        <div>
          <span>{item.label}</span>
          <Input type={item.input.type} name={item.name} value={value.name}/>
        </div>
      ))}
    </div>
  )
};

export default Form;
