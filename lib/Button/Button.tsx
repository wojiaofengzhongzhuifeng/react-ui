import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import { tuple } from '../_utils/types';
import './style.scss';
import Icon from '../icon/Icon';

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
  const {type, className: userClassName, icon} = props;


  const buttonClassName: (p1?: string)=>string = (className)=>{
    return className ?
              `${classes(sc())} ${classes(sc(className), userClassName)}` :
              `${classes(sc(className), userClassName)}`
  };

  let render;
  if(type === 'link'){
    render = (
      <a className={buttonClassName('link')}>
        <Icon iconName={icon} />
        link
      </a>
    )
  } else if(type === 'default'){
    render = (
      <a className={buttonClassName()}>
        <Icon iconName={icon} />
        default
      </a>
    );
  } else {
    render = (
      <a className={buttonClassName('primary')}>
        <Icon iconName={icon} />
        primary
      </a>
    );
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
