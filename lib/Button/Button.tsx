import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import { tuple } from '../_utils/types';

const sc = scopeClass('rao-button');

console.log(sc());

const ButtonTypes = tuple('default', 'primary', 'link');
type ButtonType = (typeof ButtonTypes)[number];

const HTMLTypes = tuple('submit', 'button');
type HTMLType = (typeof HTMLTypes)[number];

interface NativeButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type'>{
  type?: ButtonType
  icon?: string
  loading?: boolean
  className?: string
  htmlType?: HTMLType
  onClick?: React.MouseEventHandler
}

interface AnchorButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type'>{
  type?: ButtonType
  icon?: string
  loading?: boolean
  className?: string
  href?: string
  onClick?: React.MouseEventHandler
}

interface ButtonProps extends NativeButtonProps, AnchorButtonProps{}

const Button: React.FunctionComponent<ButtonProps> = (props)=> {
  const {type} = props;

  let render;
  if(type === 'link'){
    render = <a>button123321</a>
  } else {
    render = <button>button</button>
  }

  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  )
};

Button.defaultProps = {
  type: 'default'
};


export default Button;
