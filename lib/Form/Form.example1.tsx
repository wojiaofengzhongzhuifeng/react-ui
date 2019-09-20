import * as React from 'react';
import Form, { FormField, FormData } from './Form';
import { useState } from 'react';
import Button from '../Button';
import { Errors, Rule, validator } from './Validator';


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

  const handleSubmit = ()=>{
    const rule: Array<Rule> = [
      {name: 'password', isRequire: true},
      {name: 'username', isRequire: true},
      {name: 'password', minLength: '6'},
      {name: 'username', minLength: '6'}

    ];
    const errors: Errors = validator(useValue, rule);
    if(!errors){
      console.log('用户提交表单正常');
    } else {
      console.log("errors", errors);
    }
  };

  return (
    <div>
			<Form
			  field={useField}
			  value={useValue}
			  buttons={[
			    <Button buttonType='default' type='submit'>提交</Button>,
          <Button buttonType='primary'>取消</Button>,
        ]}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
};

export default FormExample1

