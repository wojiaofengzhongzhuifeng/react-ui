import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconExample from './lib/icon/Icon.example';
import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example'
import Layout from './lib/layout/Layout';
import Header from './lib/layout/Header';
import Content from './lib/layout/Content';
import Footer from './lib/layout/Footer';
import Sider from './lib/layout/Sider';

const Example = ()=>{
  return (
    <Router>
      <Layout style={{marginBottom: "10px"}}>
        <Header>
          icon
        </Header>
        <Layout>
          <Sider style={{width: "10%"}}>
            <nav>
              <ul>
                <li>
                  <Link to="/Icon">Icon</Link>
                </li>
                <li>
                  <Link to="/dialog">Dialog</Link>
                </li>
                <li>
                  <Link to="/layout">Layout</Link>
                </li>
              </ul>
            </nav>
          </Sider>
          <Content>
            <div>
              <Route path="/Icon" exact component={IconExample} />
              <Route path="/dialog" component={DialogExample} />
              <Route path="/layout" component={LayoutExample} />
            </div>
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

    </Router>
  )
};
ReactDOM.render(<Example />, document.querySelector('#root'));
