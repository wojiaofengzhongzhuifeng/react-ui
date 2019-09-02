import React from 'react';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';

interface Props{

}

const LayoutExample: React.FunctionComponent<Props> = ()=>{
  return (
    <div>
      <Header />
      <Sider/>
      <Content />
      <Footer />
    </div>
  )
};

export default LayoutExample
