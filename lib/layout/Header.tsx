import React from 'react';
import { helps, scopeClass } from '../helpers/helps';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Header: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={helps(sc('header'), className)}>{children}</div>
  )
};

export default Header;
