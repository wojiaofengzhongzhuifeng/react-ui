import {FormData} from './Form';
import { isEmptyObj } from '../helpers';

export interface Rule {
  name: string
  maxLength?: string | number
  isRequire?: boolean
  minLength?: string | number
}

interface PureErrors {
  [k:string]: Array<string>
}
export type Errors = PureErrors | null

export const validator:(p1: FormData, p2: Array<Rule>)=>Errors = (formData, rules)=>{
  const errors: Errors = {};
  rules.map((rule)=>{
    // @ts-ignore
    const formName: string = rule.name;

    if(rule.isRequire && formData[formName] === ''){
      if(!errors[formName]){
        errors[formName] = [];
      }
      errors[formName].push('必填');
    }

    if(rule.minLength && (formData[formName].length <= rule.minLength)){
      if(!errors[formName]){
        errors[formName] = [];
      }
      errors[formName].push('太短');
    }

    if(rule.maxLength && (formData[formName].length >= rule.maxLength)){
      if(!errors[formName]){
        errors[formName] = [];
      }
      errors[formName].push('太长');
    }
  });
  return isEmptyObj(errors) ? null : errors;
};
