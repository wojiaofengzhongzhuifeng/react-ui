import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import ButtonExample1 from './Button.example1';
import Table from '../Table/Table';

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
        <Table dataSource={[]} columns={[]} />
      </Card>
    </div>
  );
};

export default ButtonDemo;
