import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './icon/Icon';


const test = (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
  console.log(e);
};

ReactDOM.render(<div>
  <Icon
    iconName={"wechat"}
    onClick={test}
    className={"tests"}
    onMouseEnter={() => console.log('enter')}
    onMouseLeave={() => console.log('leave')}
    onTouchStart={() => console.log('touch')}
  />
  test
</div>, document.querySelector("#root"));
