import * as React from 'react';
import { scopeClass } from '../helpers/helps';
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

const Table: React.FunctionComponent<Props> = (props)=> {
  const {columns, dataSource} = props;

  const dataIndexArray: Array<string> = columns.map((column)=>column.dataIndex);

  return (
    <table className={sc()}>
      <thead>
      <tr>
        {columns.map((column)=><th key={column.key}>{column.title}</th>)}
      </tr>
      </thead>
      <tbody>
      {dataSource.map((data)=>(
        <tr key={data.key}>
          {dataIndexArray.map((dataIndex: string)=><td key={dataIndex}>{data[dataIndex]}</td>)}
        </tr>)
      )}
      </tbody>
    </table>
  )
};

export default Table;
