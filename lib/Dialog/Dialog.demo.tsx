import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import Table, { DataSource } from '../Table/Table';
import DialogExample1 from './Dialog.example1';
import Button from '../Button';
import DialogExample2 from './Dialog.example2';
import {columns} from "../_utils/types";

const dataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'visible',
    description: '控制 Dialog 的显示隐藏',
    type: 'boolean',
    defaultValue: '无',
  },
  {
    key: 2,
    arguments: 'buttons',
    description: '指定 Dialog footer 的渲染',
    type: 'Array<ReactElement>',
    defaultValue: '无',
  },
  {
    key: 3,
    arguments: 'handleClickXOrMask',
    description: '用户点击右上角的关闭和点击 Mask 的回调函数',
    type: 'React.MouseEventHandler',
    defaultValue: '无',
  },
  {
    key: 4,
    arguments: 'closeOnClickMask',
    description: '配置当点击 mask 是否关闭',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    key: 5,
    arguments: 'title',
    description: 'Dialog 的标题',
    type: 'string',
    defaultValue: '信息',
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



const DialogDemo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        弹出一个对话框
      </Card>

      <Card>
        <h2>使用示例1</h2>
        <p>通过写 JSX 的方式，生成 Dialog </p>
        <Demo code={require('!!raw-loader!./Dialog.example1.tsx').default}>
          <DialogExample1/>
        </Demo>
      </Card>

      <Card>
        <h2>使用示例2</h2>
        <p>通过写函数调用的方式，生成 Dialog </p>
        <Demo code={require('!!raw-loader!./Dialog.example2.tsx').default}>
          <DialogExample2/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={dataSource} columns={columns} />
      </Card>

      <Card>
        <h2>总结</h2>
        <Button buttonType='link' href='https://github.com/wojiaofengzhongzhuifeng/study/blob/master/blog/posts/react/11Button.md' target='_blank'>连接</Button>
      </Card>
    </div>
  );
};

export default DialogDemo;
