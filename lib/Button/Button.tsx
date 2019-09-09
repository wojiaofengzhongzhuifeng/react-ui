import * as React from 'react';
import { scopeClass } from '../helpers/classes';

interface Props extends React.Props<any>{
}

const sc = scopeClass('rao-button');

console.log(sc());

const Button: React.FunctionComponent<Props> = (props)=> {
  return (
    <button>button</button>
  )
};

export default Button;
