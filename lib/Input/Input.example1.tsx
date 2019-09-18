
import * as React from 'react';
import Input from './Input';
import Icon from '../icon/Icon';
import { useState } from 'react';

const InputExample1: React.FunctionComponent = ()=>{
  const [useValue, setValue] = useState<string>('12321');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  };

  const handlePressEnter = (e: React.KeyboardEvent) => {
    console.log("e", e);
    console.log('点击了 enter');
  };

  return (
    <div>
			<Input
			  className='test1'
			  placeholder={'test123321'}
        addOnBefore="Http://"
        addOnAfter={<Icon iconName='api'/>}
        width={200}
        value={useValue}
        onChange={handleInputChange}
        disabled={false}
        onPressEnter={handlePressEnter}
      />
    </div>
  )
};

export default InputExample1

