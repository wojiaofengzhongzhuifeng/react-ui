
import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import InputExample1 from './Input.example1';
import Table, { Column, DataSource } from '../Table/Table';
import Button from '../Button';

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
  },
  {
    key: 3,
    arguments: 'value',
    description: '设置 input 的值',
    type: 'string',
    defaultValue: '无',
  },
  {
    key: 4,
    arguments: 'onChange',
    description: '当 input 改变触发的回调',
    type: 'React.ChangeEventHandler',
    defaultValue: '无',
  },
  {
    key: 5,
    arguments: 'disabled',
    description: '控制 input 是否能使用',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: 6,
    arguments: 'onPressEnter',
    description: '当 input 按下 enter 的时候调用的函数',
    type: 'fn',
    defaultValue: '无',
  },
  {
    key: 7,
    arguments: '...reset',
    description: '继承自 React.InputHTMLAttributes<HTMLInputElement>',
    type: '无',
    defaultValue: '无',
  },
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
        <Button type='link' href='https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/react轮子/12Input.md' target='_blank'>连接</Button>
      </Card>
    </div>
  );
};

export default InputDemo;
