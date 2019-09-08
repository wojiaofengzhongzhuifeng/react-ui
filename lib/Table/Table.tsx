import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './style.scss';

interface Props extends React.Props<any>{
}

const sc = scopeClass('rao-table');

console.log(sc);

const Table: React.FunctionComponent<Props> = (props)=> {
  return (
    <div>table</div>
  )
};

export default Table;
