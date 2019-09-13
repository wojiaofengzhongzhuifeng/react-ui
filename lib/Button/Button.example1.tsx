import * as React from 'react';
import Button from './Button';

const ButtonExample1: React.FunctionComponent = ()=>{
  return (
    <div>
      <Button type='link'>link</Button>
      <Button type='default'>default</Button>
      <Button type='primary'>primary</Button>
    </div>
  )
};

export default ButtonExample1
