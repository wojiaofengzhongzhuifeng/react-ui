import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import { tuple } from '../_utils/types';

const Types = tuple('primary', 'link');
export type type = (typeof Types)[number];

interface Props extends React.Props<any>{
  type?: type,
}

const sc = scopeClass('rao-button');

console.log(sc());

const Button: React.FunctionComponent<Props> = (props)=> {
  const {type} = props;
  return (
    <button>button{type}</button>
  )
};

Button.defaultProps = {
  type: 'primary'
};

export default Button;
