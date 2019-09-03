import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Layout from './Layout';
import Sider from './Sider';
import './layout.example.scss';

interface Props{

}

const LayoutExample: React.FunctionComponent<Props> = ()=>{
  return (
    <div>
      <Layout style={{marginBottom: "10px"}} className={"test"}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>

      <Layout style={{marginBottom: "10px"}}>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout style={{marginBottom: "10px"}}>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <Layout style={{marginBottom: "10px"}}>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
};

export default LayoutExample
