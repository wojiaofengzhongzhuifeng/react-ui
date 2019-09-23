
import * as React from 'react';
import { helps, scopeClass } from '../helpers/helps';
import './style.scss';
import Input from '../Input';
import { Errors } from './Validator';
import { useEffect } from 'react';

const sc = scopeClass('rao-form');

export interface FormData{
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

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement>{
  field: Array<FormField>
  value: FormData
  buttons: Array<React.ReactElement>
  onChange?: any
  onSubmit?:any
  errors?: Errors
}

const Form: React.FunctionComponent<FormProps> = (props)=> {
  const {field, value, buttons, onChange, onSubmit, errors,...reset} = props;
  console.log("errors", errors);
  useEffect(()=>{
    console.log('form 组件接受的errors', errors);
  });

  const handleInputChange = (formKey: string, formValue: string)=>{
    const newValue = {...value, [formKey]: formValue};
    onChange && onChange(newValue);
  };

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  // const renderErrors = (fieldName: string)=>{
  //   if(errors){
  //     console.log("errors[fieldName]", errors[fieldName]);
  //   }
  // };

  return (
		<form className={sc()} onSubmit={handleSubmit} {...reset}>
      <table className={sc('table')}>
        <tbody>
        {field && field.map((item)=>{
          const fieldName = item.name;  // "password"
          return (
            <tr key={fieldName} className={helps(sc('item'), sc('tr'))}>
              <td className={sc('td')}>
                <span className={sc('name')}>{item.label}</span>
              </td>
              <td style={{
                paddingLeft: "16px"
              }}>
                <Input
                  type={item.input.type}
                  name={fieldName}
                  value={value[fieldName]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{handleInputChange(fieldName, e.target.value)}}
                  style={errors && errors[fieldName] ? {border:"1px solid red"} : {}}
                />
                <span style={{color: 'red'}}>
                  {/*{errors && errors[fieldName]}*/}
                  {JSON.stringify(errors)}
                </span>
              </td>
            </tr>
          )
        })}
        <tr className="rao-form-tr">
          <td className="rao-form-td" style={{
            textAlign: 'right'
          }}>
            {buttons && buttons.map((item, key)=>{
              return React.cloneElement(item,{
                key: key
              })
            })}
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  )
};

export default Form;
