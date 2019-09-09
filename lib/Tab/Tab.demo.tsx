import React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import TabExample1 from './Tab.example1';
import Table from '../Table/Table';

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
        <h2>API</h2>
        <Table dataSource={[]} columns={[]} />
      </Card>
    </div>
  );
};

export default TabDemo;
