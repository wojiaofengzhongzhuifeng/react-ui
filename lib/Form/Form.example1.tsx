import * as React from 'react';
import Form, { FormField, FormData } from './Form';
import { useState } from 'react';
import Button from '../Button';
import { Errors, Rule, validator } from './Validator';

// 模拟发送异步请求，请求返回一个 promise
const asyncCheckUserNameUnique = (userName: string)=>{
  const existUserName = ['rjj', 'raojiajun', 'xm'];
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(existUserName.indexOf(userName) === -1){
        resolve('可以使用该名字');
      } else {
        reject('不能使用该名字');
      }
    }, 3000)
  })
};

const FormExample1: React.FunctionComponent = ()=>{
  const [useField] = useState<Array<FormField>>([
    {name: 'username', label: '姓名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [useValue, setValue] = useState<FormData>({
    username: '1',
    password: '2',
  });
  const [useErrors, setErrors] = useState<Errors>({});

  const handleFormChange = (formData: FormData)=>{
    setValue(formData)
  };

  const handleSubmit = ()=>{
    const rule: Array<Rule> = [
      // {name: 'password', isRequire: true},
      // {name: 'username', isRequire: true},
      // {name: 'password', minLength: '6'},
      // {name: 'username', minLength: '6'},
      // {name: 'password', maxLength: '12'},
      // {name: 'username', maxLength: '12'},
      {name: 'username', asyncValidator: ()=>{
          return asyncCheckUserNameUnique(useValue.username)
      }}
    ];
    const errors: Errors = validator(useValue, rule);
    console.log('errors', errors);
    if(!errors){
      console.log('用户提交表单正常');
      setErrors(null);
    } else {
      console.log("errors", errors);
      setErrors(errors);
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
        errors={useErrors}
      />
    </div>
  )
};

export default FormExample1

