import * as React from 'react';
import './style.scss';
import {classes} from '../helpers/classes';

import './importIcons';

interface Props extends React.SVGAttributes<SVGElement>{
  iconName: string
}

const Icon: React.FunctionComponent<Props> = ({ iconName, className, ...restProps }) => {
  return (
    <svg {...restProps}  className={classes('rao-icon', className )}>
      <use xlinkHref={`#${iconName}`}/>
    </svg>
  );
};

export default Icon;
