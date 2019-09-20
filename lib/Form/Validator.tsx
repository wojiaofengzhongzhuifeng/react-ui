import {FormData} from './Form';

export interface Rule {
  [k: string]: string | boolean
}

export interface Errors {
  [k:string]: Array<string>
}

export const validator:(p1: FormData, p2: Array<Rule>)=>Errors = ()=>{
  return {
    password: ["太短"]
  }
};
