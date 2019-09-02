import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Layout from './Layout';

interface Props{

}

const LayoutExample: React.FunctionComponent<Props> = ()=>{
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
};

export default LayoutExample
