import IconExample1 from './icon.example1';
import * as React from 'react';
import Demo from '../../demo';
import Card from '../Card/Card';
import Table, {DataSource} from '../Table/Table';
import {columns} from "../_utils/types";

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
        <Table dataSource={IconDataSource} columns={columns} />
      </Card>
    </div>
  );
};

export default IconDemo;
