import IconExample1 from './icon.example1';
import * as React from 'react';
import Demo from '../../demo';
import Card from '../Card/Card';
import Table, {DataSource, Column} from '../Table/Table';

const IconDataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'className',
    description: '为 icon 添加 className',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: '...reset',
    description: '这个组件继承自 React.SVGAttributes<SVGElement>',
    type: '',
    defaultValue: '',
  }
];

const IconColumns: Array<Column> = [
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

const IconDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        这是一个 icon
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./icon.example1.tsx').default}>
          <IconExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={IconDataSource} columns={IconColumns} />
      </Card>
    </div>
  );
};

export default IconDemo;
