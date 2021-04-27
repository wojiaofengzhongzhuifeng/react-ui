
import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import FormExample1 from './Form.example1';
import Table, { Column, DataSource } from '../Table/Table';
import Button from "../Button";

const dataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'type',
    description: '指定 button 的类型，根据类型，样式不同，可选类型有「\'default\', \'primary\', \'link\'」',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: '...reset',
    description: '继承自 React.FormHTMLAttributes<HTMLFormElement>',
    type: 'Object',
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

const FormDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        test
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./Form.example1.tsx').default}>
          <FormExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={dataSource} columns={columns} />
      </Card>

      <Card>
        <h2>总结</h2>
        <Button buttonType='link' href='https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/posts/react/13Form.md' target='_blank'>连接</Button>
      </Card>
    </div>
  );
};

export default FormDemo;
