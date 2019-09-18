import * as React from 'react';
import Form, { FormField } from './Form';
import { useState } from 'react';


const FormExample1: React.FunctionComponent = ()=>{
  const [useField] = useState<Array<FormField>>([
    {name: 'username', label: '姓名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [useValue] = useState({
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

