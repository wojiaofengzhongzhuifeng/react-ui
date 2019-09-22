
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
  useEffect(()=>{
    console.log('errors', errors);
  }, [errors]);

  const handleInputChange = (formKey: string, formValue: string)=>{
    const newValue = {...value, [formKey]: formValue};
    onChange && onChange(newValue);
  };

  const handleSubmit = (e: React.FormEvent)=>{
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  const renderErrors = (fieldName: string)=>{
    if(errors){
      let renderSpan;

      for(let i=0;i<=errors[fieldName].length - 1;i++){
        if(typeof errors[fieldName][i] !== 'string'){
          renderSpan = <span>加载中</span>;
          break;
        } else {
          renderSpan = <span>错误</span>
        }
      }

      return renderSpan;
    } else{
      return null
    }

  };

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
                  {renderErrors(fieldName)}
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
