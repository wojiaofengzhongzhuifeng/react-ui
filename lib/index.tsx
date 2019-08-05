import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './icon/Icon';


const test = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
  console.log(e);
};

ReactDOM.render(<Icon iconName={"wechat"} onClick={test}/>, document.querySelector("#root"));
