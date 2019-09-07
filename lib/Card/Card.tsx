import * as React from 'react';
import './style.scss';
import {classes} from '../helpers/classes';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
}

const Card: React.FunctionComponent<Props> = ({ className, children, ...restProps }) => {
  return (
    <div {...restProps}  className={classes('rao-card', className )}>
      {children}
    </div>
  );
};

export default Card;
