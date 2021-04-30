import React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import TabExample1 from './Tab.example1';
import Table, {DataSource} from '../Table/Table';
import {columns} from '../_utils/types';

const dataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'activeKey',
    description: 'tab 高亮的 key',
    type: 'string | number',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: 'onChange',
    description: '点击 tab header 的回调事件',
    type: `(e: React.MouseEvent<HTMLDivElement, MouseEvent>, clickedTabPaneKey: ReactText)=>void`,
    defaultValue: '无',
  },
  {
    key: 3,
    arguments: 'children',
    description: 'tab 的子组件',
    type: `Array<ReactElement>`,
    defaultValue: '无',
  },
];

const TabPaneDataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'tabName',
    description: 'tabPane 名称',
    type: 'ReactText',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: 'key',
    description: 'tabPane 唯一标识符',
    type: `ReactText`,
    defaultValue: '无',
  },
];



const TabDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./Tab.example1.tsx').default}>
          <TabExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>Tab API </h2>
        <Table dataSource={dataSource} columns={columns} />
      </Card>

      <Card>
        <h2>Tab Pane API </h2>
        <Table dataSource={TabPaneDataSource} columns={columns} />
      </Card>
    </div>
  );
};

export default TabDemo;
