import * as React from 'react';
import Form, { FormField, FormData } from './Form';
import { useState } from 'react';
import Button from '../Button';


const FormExample1: React.FunctionComponent = ()=>{
  const [useField] = useState<Array<FormField>>([
    {name: 'username', label: '姓名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [useValue, setValue] = useState<FormData>({
    username: '1',
    password: '2',
  });

  const handleFormChange = (formData: FormData)=>{
    setValue(formData)
  };

  return (
    <div>
			<Form
			  field={useField}
			  value={useValue}
			  buttons={[
			    <Button buttonType='default'>提交</Button>,
          <Button buttonType='primary'>取消</Button>,
        ]}
        onChange={handleFormChange}
      />
    </div>
  )
};

export default FormExample1

