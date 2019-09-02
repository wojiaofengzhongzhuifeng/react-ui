import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconExample from './lib/icon/Icon.example';
import DialogExample from './lib/dialog/Dialog.example';
import LayoutExample from './lib/layout/Layout.example'

const Example = ()=>{
  return (
    <Router>
      <div>
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

        <Route path="/Icon" exact component={IconExample} />
        <Route path="/dialog" component={DialogExample} />
        <Route path="/layout" component={LayoutExample} />
      </div>
    </Router>
  )
};
ReactDOM.render(<Example />, document.querySelector('#root'));
