import * as React from 'react';
import { scopeClass } from '../helpers/classes';

interface Props extends React.Props<any>{
}

const sc = scopeClass('rao-tab');

const Tab: React.FunctionComponent<Props> = ()=> {
  return (
    <div className={sc()}>
      tab
    </div>
  )
};

export default Tab;
