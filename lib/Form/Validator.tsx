import {FormData} from './Form';

export interface Rule {
  name: string
  [k: string]: any
}

export interface Errors {
  [k:string]: Array<string>
}

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
  return errors;
};
