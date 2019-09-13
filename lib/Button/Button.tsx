import * as React from 'react';
import { scopeClass } from '../helpers/classes';

const sc = scopeClass('rao-button');

console.log(sc());

const Button: React.FunctionComponent<any> = ()=> {
  return (
    <button>button</button>
  )
};


export default Button;
