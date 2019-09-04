import React from 'react';
import { classes, scopeClass } from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Footer: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={classes(sc('footer'), className)}>{children}</div>
  )
};

export default Footer;
