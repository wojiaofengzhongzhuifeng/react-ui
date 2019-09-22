import {FormData} from './Form';
import { isEmptyObj } from '../helpers/helps';

export interface Rule {
  name: string
  maxLength?: string | number
  isRequire?: boolean
  minLength?: string | number
  asyncValidator?: ()=>Promise<any>
}

export interface PureErrors {
  [k:string]: Array<string | Promise<any>>
}
export type Errors = PureErrors | null

export const validator:(p1: FormData, p2: Array<Rule>, p3: (p1: any)=>void)=>Errors = (formData, rules, cb)=>{
  const errors: Errors = {};

  const addError = (formName: string, errorMessage: string | Promise<any>)=>{
    if(!errors[formName]){
      errors[formName] = [];
    }
    errors[formName].push(errorMessage);
  };

  rules.map((rule)=>{
    // @ts-ignore
    const formName: string = rule.name;

    if(rule.asyncValidator){
      addError(formName, rule.asyncValidator())
    }

    if(rule.isRequire && formData[formName] === ''){
      addError(formName, '必填')
    }

    if(rule.minLength && (formData[formName].length <= rule.minLength)){
      addError(formName, '太短')
    }

    if(rule.maxLength && (formData[formName].length >= rule.maxLength)){
      addError(formName, '太长')
    }
  });

  Object.keys(errors).forEach((errorName: string)=>{
    Promise.all(errors[errorName]).then((resolve)=>{
      errors[errorName] = resolve
    }, (reject)=>{
      errors[errorName] = reject
    }).finally(()=>{
      cb(errors);
    })
  });


  // const valueArray = objectValueToArray(errors);
  //
  // const flattenArray = flatten(valueArray);
  //
  // console.log(flattenArray);
  //
  // Promise.all(flattenArray).then((resolve)=>{
  //   cb(resolve);
  // }, (reject)=>{
  //   cb(reject);
  // });

  return isEmptyObj(errors) ? null : errors;
};
