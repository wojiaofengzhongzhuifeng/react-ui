import * as React from 'react';
import { helps, scopeClass } from '../helpers/helps';
import { tuple } from '../_utils/types';
import './style.scss';
import Icon from '../icon/Icon';

const sc = scopeClass('rao-button');

const ButtonTypes = tuple('default', 'primary', 'link');
type ButtonType = (typeof ButtonTypes)[number];

interface NativeButtonProps extends React.ButtonHTMLAttributes<any>{
  buttonType?: ButtonType
  icon?: string
  loading?: boolean
}

interface AnchorButtonProps extends React.ButtonHTMLAttributes<any>{
  buttonType?: ButtonType
  icon?: string
  loading?: boolean
  href?: string
  target?: string
}

interface ButtonProps extends NativeButtonProps, AnchorButtonProps{}

const Button: React.FunctionComponent<ButtonProps> = (props)=> {
  const {buttonType, className: userClassName, icon, loading, onClick, children,...reset} = props;

  const buttonClassName: (p1?: string)=>string = (className)=>{
    return className ?
              `${helps(sc())} ${helps(sc(className), userClassName)}` :
              `${helps(sc(className), userClassName)}`
  };

  const handleClickEvent: React.MouseEventHandler = (e)=>{
    onClick && onClick(e);
  };

  let render;
  if(buttonType === 'link'){
    render = (
      <a className={buttonClassName('link')} onClick={handleClickEvent} {...reset}>
        {loading ? <Icon iconName='loading' className='rao-icon-rotating'/> : <Icon iconName={icon}/>}
        {children}
      </a>
    )
  } else if(buttonType === 'default'){
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
  buttonType: 'default',
  loading: false
};


export default Button;
