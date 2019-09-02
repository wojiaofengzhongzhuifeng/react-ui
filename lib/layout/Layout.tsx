import React from 'react';

interface Props extends React.Props<any>{

}

const Layout: React.FunctionComponent<Props> = (props)=>{
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  )
};

export default Layout;
