import IconExample1 from './icon.example1';
import React from 'react';
import Demo from '../../demo';
import Card from '../Card/Card';
import Table, {DataSource, Column} from '../Table/Table';

const IconDataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'className',
    description: '通过输入 iconName，可以展示不同的 icon',
    type: 'string',
    defaultValue: '无',
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
        <ul>
          <li>
            iconName：通过输入 iconName，可以展示不同的 icon
          </li>
          <li>
            SVGAttributes：本组件继承了 SVG 元素，拥有所有 SVG 元素属性
          </li>
        </ul>
        <Table dataSource={IconDataSource} columns={IconColumns} />
      </Card>
    </div>
  );
};

export default IconDemo;
