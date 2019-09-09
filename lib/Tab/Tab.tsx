import * as React from 'react';
import { scopeClass } from '../helpers/classes';

interface Props extends React.Props<any>{
}

const sc = scopeClass('rao-tab');

console.log(sc());

const Tab: React.FunctionComponent<Props> = (props)=> {
  return (
    <div>
      tab
    </div>
  )
};

export default Tab;
