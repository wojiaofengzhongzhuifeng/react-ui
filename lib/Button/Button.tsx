import * as React from 'react';
import { classes, scopeClass } from '../helpers/classes';
import { tuple } from '../_utils/types';
import './style.scss';
import Icon from '../icon/Icon';

const sc = scopeClass('rao-button');

const ButtonTypes = tuple('default', 'primary', 'link');
type ButtonType = (typeof ButtonTypes)[number];

interface NativeButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type'>{
  type?: ButtonType
  icon?: string
  loading?: boolean
}

interface AnchorButtonProps extends Omit<React.ButtonHTMLAttributes<any>, 'type'>{
  type?: ButtonType
  icon?: string
  loading?: boolean
  href?: string
  target?: string
}

interface ButtonProps extends NativeButtonProps, AnchorButtonProps{}

const Button: React.FunctionComponent<ButtonProps> = (props)=> {
  const {type, className: userClassName, icon, loading, onClick, children,...reset} = props;

  const buttonClassName: (p1?: string)=>string = (className)=>{
    return className ?
              `${classes(sc())} ${classes(sc(className), userClassName)}` :
              `${classes(sc(className), userClassName)}`
  };

  const handleClickEvent: React.MouseEventHandler = (e)=>{
    onClick && onClick(e);
  };

  let render;
  if(type === 'link'){
    render = (
      <a className={buttonClassName('link')} onClick={handleClickEvent} {...reset}>
        {loading ? <Icon iconName='loading' className='rao-icon-rotating'/> : <Icon iconName={icon}/>}
        {children}
      </a>
    )
  } else if(type === 'default'){
    render = (
      <button className={buttonClassName()}  onClick={handleClickEvent} {...reset}>
        {loading ? <Icon iconName='loading' className='rao-icon-rotating'/> : <Icon iconName={icon}/>}
        {children}
      </button>
    );
  } else {
    render = (
      <button className={buttonClassName('primary')} onClick={handleClickEvent} {...reset}>
        {loading ? <Icon iconName='loading' className='rao-icon-rotating'/> : <Icon iconName={icon}/>}
        <Icon iconName={icon} />
        {children}
      </button>
    );
  }

  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  )
};

Button.defaultProps = {
  type: 'default',
  loading: false
};


export default Button;
