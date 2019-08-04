import * as React from 'react';

import './importIcons'


interface Props {
  iconName: string
}

const Icon: React.FunctionComponent<Props> = ({ iconName }) => {
  return (
    <div>
      <svg>
        <use xlinkHref={`#${iconName}`}/>
      </svg>
    </div>
  );
};

export default Icon;
