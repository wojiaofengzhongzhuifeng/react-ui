import * as React from 'react';
import Form, { FormField } from './Form';
import { useState } from 'react';
import Button from '../Button';


const FormExample1: React.FunctionComponent = ()=>{
  const [useField] = useState<Array<FormField>>([
    {name: 'username', label: '姓名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [useValue] = useState({
    username: '1',
    password: '2',
  });
  return (
    <div>
			<Form
			  field={useField}
			  value={useValue}
			  buttons={[
			    <Button type='default'>提交</Button>,
          <Button type='primary'>取消</Button>,
        ]}
      />
    </div>
  )
};

export default FormExample1

