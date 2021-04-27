import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import ButtonExample1 from './Button.example1';
import Table, { Column, DataSource } from '../Table/Table';
import Button from './Button';

const ButtonDataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'buttonType',
    description: '指定 button 的类型，根据类型，样式不同，可选类型有「\'default\', \'primary\', \'link\'」',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: 'icon',
    description: '输入 iconName，可向 button 左侧添加 iconName 对应 icon',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 3,
    arguments: 'loading',
    description: 'button 左侧的 loading 状态，完全由用户指定 loading 状态',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: 4,
    arguments: 'icon',
    description: '输入 iconName，可向 button 左侧添加 iconName 对应 icon',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 5,
    arguments: 'href',
    description: 'button 作为跳转按钮，即将跳转的地址',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 6,
    arguments: 'target',
    description: '如何打开跳转地址',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 7,
    arguments: '...reset',
    description: '本组件继承自 React.ButtonHTMLAttributes， 拥有 React.ButtonHTMLAttributes 所有属性',
    type: 'string',
    defaultValue: '无',
  }
];

const ButtonColumns: Array<Column> = [
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

const ButtonDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        基于 HTML 原生元素封装的 Button 组件
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./Button.example1.tsx').default}>
          <ButtonExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={ButtonDataSource} columns={ButtonColumns} />
      </Card>

      <Card>
        <h2>总结</h2>
        <Button buttonType='link' href='https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/posts/react/11Button.md' target='_blank'>连接</Button>
      </Card>
    </div>
  );
};

export default ButtonDemo;
