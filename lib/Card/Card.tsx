import * as React from 'react';
import './style.scss';
import {helps} from '../helpers/helps';

interface Props extends React.HTMLAttributes<HTMLDivElement>{
}

const Card: React.FunctionComponent<Props> = ({ className, children, ...restProps }) => {
  return (
    <div {...restProps}  className={helps('rao-card', className )}>
      {children}
    </div>
  );
};

export default Card;
