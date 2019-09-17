
import * as React from 'react';
import Input from './Input';
import Icon from '../icon/Icon';

const InputExample1: React.FunctionComponent = ()=>{
  return (
    <div>
			<Input
			  className='test1'
			  placeholder={'test123321'}
        addOnBefore="Http://"
        addOnAfter={<Icon iconName='api'/>}
      />
    </div>
  )
};

export default InputExample1

