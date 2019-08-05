import * as React from 'react';
import "./style.scss"

import './importIcons'


interface Props {
  iconName: string
  onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>)=>void
}

const Icon: React.FunctionComponent<Props> = ({ iconName, onClick }) => {
  return (
    <div className="test">
      <svg onClick={(e)=>{onClick(e)}}>
        <use xlinkHref={`#${iconName}`}/>
      </svg>
    </div>
  );
};

export default Icon;
