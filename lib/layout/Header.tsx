import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement>, React.Props<any>{

}

const Header: React.FunctionComponent<Props> = (props)=>{
  const {children, className} = props;

  return (
    <div {...props} className={className}>{children}</div>
  )
};

export default Header;
