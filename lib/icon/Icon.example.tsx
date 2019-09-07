import * as React from 'react';
import Icon from './Icon';

const IconExample: React.FunctionComponent = ()=>{
  return (
    <div>
      <h1>概述</h1>
      <h1>api</h1>
      <h1>知识点</h1>
      <Icon iconName='api'/>
      <Icon iconName='apple'/>
    </div>
  )
};

export default IconExample
