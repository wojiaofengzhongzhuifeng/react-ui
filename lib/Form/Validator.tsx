import {FormData} from './Form';
import { isEmptyObj } from '../helpers';

export interface Rule {
  name: string
  [k: string]: any
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
  });
  return isEmptyObj(errors) ? null : errors;
};
