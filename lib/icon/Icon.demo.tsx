import IconExample1 from './icon.example1';
import React from 'react';
import Demo from '../../demo';

const IconDemo = () => {
  return (
    <div>
      <h1>概述</h1>
      这是一个 icon

      <h2>使用示例</h2>
      <Demo code={require('!!raw-loader!./icon.example1.tsx').default}>
        <IconExample1/>
      </Demo>

      <h2>API</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default IconDemo;
