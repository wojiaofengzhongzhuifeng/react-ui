import React from 'react';
import { classes, scopeClass } from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const sc = scopeClass('rao-layout');

const Content: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={classes(sc('content'), className)}>{children}</div>
  )
};

export default Content;
