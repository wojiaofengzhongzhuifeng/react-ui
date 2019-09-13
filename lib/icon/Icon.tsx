import * as React from 'react';
import './style.scss';
import {classes} from '../helpers/classes';

import './importIcons';

interface Props extends React.SVGAttributes<SVGElement>{
  iconName: string | undefined
}

const Icon: React.FunctionComponent<Props> = ({ iconName, className, ...restProps }) => {
  let render;
  render = iconName ? (
    <svg {...restProps}  className={classes('rao-icon', className )}>
      <use xlinkHref={`#${iconName}`}/>
    </svg>
  ) : null;
  return (
    <React.Fragment>
      {render}
    </React.Fragment>
  )
};

export default Icon;
