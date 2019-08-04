import * as React from 'react';

import './importIcons'


interface Props {
  iconName: string
}

const Icon: React.FunctionComponent<Props> = ({ iconName }) => {
  return (
    <div>
      {iconName}
    </div>
  );
};

export default Icon;
