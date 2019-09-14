import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import LayoutExample from './lib/layout/Layout.example'
import Layout from './lib/layout/Layout';
import Header from './lib/layout/Header';
import Content from './lib/layout/Content';
import Footer from './lib/layout/Footer';
import Sider from './lib/layout/Sider';
// @ts-ignore
import logo from './asset/logo.png';
import './example.scss';
import IconDemo from './lib/icon/Icon.demo';
import ButtonDemo from './lib/Button/Button.demo';
import TabDemo from './lib/Tab/Tab.demo';
import DialogDemo from './lib/Dialog/Dialog.demo';


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
                <li>
                  <NavLink to="/card">Card</NavLink>
                </li>
                <li>
                  <NavLink to="/button">button</NavLink>
                </li>
                <li>
                  <NavLink to="/tab">Tab</NavLink>
                </li>
              </ul>
            </nav>
          </Sider>
          <Content className='site-main'>
            <div>
              <Route path="/Icon" exact component={IconDemo} />
              <Route path="/dialog" component={DialogDemo} />
              <Route path="/layout" component={LayoutExample} />
              <Route path="/button" component={ButtonDemo} />
              <Route path="/tab" component={TabDemo} />

            </div>
          </Content>
        </Layout>
        <Footer className='site-footer'>Footer</Footer>
      </Layout>

    </Router>
  )
};
ReactDOM.render(<Example />, document.querySelector('#root'));
