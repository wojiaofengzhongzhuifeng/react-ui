import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const Sider: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={className}>{children}</div>
  )
};

export default Sider;
