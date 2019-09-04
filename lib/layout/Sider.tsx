import React from 'react';
import { classes, scopeClass } from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Sider: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={classes(sc('sider'), className)}>{children}</div>
  )
};

export default Sider;
