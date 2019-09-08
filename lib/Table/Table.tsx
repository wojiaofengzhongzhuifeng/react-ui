import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './style.scss';

export interface DataSource {
  key: string | number
  [k: string]: any
}

export interface Column {
  key: string | string
  title: string
  dataIndex: string
}

interface Props extends React.Props<any>{
  dataSource: Array<DataSource>
  columns: Array<Column>
}

const sc = scopeClass('rao-table');

console.log(sc);

const Table: React.FunctionComponent<Props> = (props)=> {
  const {columns, dataSource} = props;

  console.log(columns);

  console.log(dataSource);

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column)=><th key={column.key}>{column.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((data)=>(
          <tr key={data.key}>
            {Object.keys(data).map((item, index)=>(
              <td key={index}>item</td>
            ))}
          </tr>)
        )}
      </tbody>
    </table>
  )
};

export default Table;
