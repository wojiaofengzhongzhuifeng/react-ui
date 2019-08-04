import * as React from 'react';
import "./style.scss"

import './importIcons'


interface Props {
  iconName: string
}

const Icon: React.FunctionComponent<Props> = ({ iconName }) => {
  return (
    <div className="test">
      <svg>
        <use xlinkHref={`#${iconName}`}/>
      </svg>
    </div>
  );
};

export default Icon;
