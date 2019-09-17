
import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import InputExample1 from './Input.example1';
import Table, { Column, DataSource } from '../Table/Table';

const dataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'addOnAfter',
    description: '带标签的 input，设置后置标签',
    type: 'ReactNode',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: 'addOnBefore',
    description: '带标签的 input，设置前置标签',
    type: 'ReactNode',
    defaultValue: '无',
  }
];

const columns: Array<Column> = [
  {
    title: '参数',
    key: 'arguments',
    dataIndex: 'arguments'
  },
  {
    title: '描述',
    key: 'description',
    dataIndex: 'description'
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type'
  },
  {
    title: '默认值',
    key: 'defaultValue',
    dataIndex: 'defaultValue'
  }
];

const InputDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        test
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./Input.example1.tsx').default}>
          <InputExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={dataSource} columns={columns} />
      </Card>

      <Card>
        <h2>总结</h2>
      </Card>
    </div>
  );
};

export default InputDemo;
