import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import IconExample from './lib/icon/Icon.example';
import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example'
import Layout from './lib/layout/Layout';
import Header from './lib/layout/Header';
import Content from './lib/layout/Content';
import Footer from './lib/layout/Footer';
import Sider from './lib/layout/Sider';
// @ts-ignore
import logo from './asset/logo.png';
import './example.scss';


const Example = ()=>{
  return (
    <Router>
      <Layout style={{marginBottom: "10px"}} className='site-page'>
        <Header className="site-header">
          <div className="logo">
            <img src={logo} alt="" width={64} height={64}/>
            <span> RAO </span>
          </div>
        </Header>
        <Layout style={{height: "85vh"}}>
          <Sider style={{width: "10%"}} className='site-aside'>
            <nav>
              <ul>
                <li>
                  <NavLink to="/Icon">Icon</NavLink>
                </li>
                <li>
                  <NavLink to="/dialog">Dialog</NavLink>
                </li>
                <li>
                  <NavLink to="/layout">Layout</NavLink>
                </li>
              </ul>
            </nav>
          </Sider>
          <Content className='site-main'>
            <div>
              <Route path="/Icon" exact component={IconExample} />
              <Route path="/dialog" component={DialogExample} />
              <Route path="/layout" component={LayoutExample} />
            </div>
          </Content>
        </Layout>
        <Footer className='site-footer'>Footer</Footer>
      </Layout>

    </Router>
  )
};
ReactDOM.render(<Example />, document.querySelector('#root'));
