import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import { tuple } from '../_utils/types';

const Types = tuple('primary', 'link');
export type type = (typeof Types)[number];

interface Props extends React.Props<any>{
  type: type,
}

const sc = scopeClass('rao-button');

console.log(sc());

const Button: React.FunctionComponent<Props> = (props)=> {
  return (
    <button>button</button>
  )
};

export default Button;
