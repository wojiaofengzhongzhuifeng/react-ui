import * as React from 'react';
import "./style.scss"

import './importIcons'


interface Props extends React.SVGAttributes<SVGElement>{
  iconName: string
}

const Icon: React.FunctionComponent<Props> = ({ iconName, ...restProps }) => {
  return (
    <div className="test">
      <svg {...restProps}>
        <use xlinkHref={`#${iconName}`}/>
      </svg>
    </div>
  );
};

export default Icon;
