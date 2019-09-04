import React, { ReactElement } from 'react';
import {scopeClass, classes} from '../helpers/classes';
import './style.scss';
import Sider from './Sider';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Layout: React.FunctionComponent<Props> = (props)=>{
  const {children, className, style} = props;
  let hasAside = false;

  children && (children as Array<ReactElement>).forEach((item)=>{
    if(item.type === Sider){
      hasAside = true;
    }
  });

  const asideStyle = hasAside ? {display: 'flex', ...style} : {...style};

  return (
    <div {...props} className={classes(sc('layout'), className)}  style={asideStyle}>
      {children}
    </div>
  )
};

export default Layout;
