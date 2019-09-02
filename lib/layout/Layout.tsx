import React from 'react';
import {scopeClass} from '../helpers/classes';
import './style.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Layout: React.FunctionComponent<Props> = (props)=>{
  const {children} = props;
  return (
    <div className={sc('layout')}>
      {children}
    </div>
  )
};

export default Layout;
