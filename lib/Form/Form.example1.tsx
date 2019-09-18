
import * as React from 'react';
import Form from './Form';
import { useState } from 'react';
import Input from '../Input';

const FormExample1: React.FunctionComponent = ()=>{
  const [useField] = useState([
    {name: 'username', label: '姓名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [useValue, setValue] = useState({
    username: '',
    password: '',
  });
  return (
    <div>
			<Form field={useField} value={useValue}/>
    </div>
  )
};

export default FormExample1

