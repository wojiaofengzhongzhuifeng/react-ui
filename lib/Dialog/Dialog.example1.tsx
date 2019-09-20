import * as React from 'react';
import Dialog from './Dialog';
import { useState } from 'react';
import Button from '../Button';

const DialogExample1: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
  };

  const handleClickCancel = ()=>{
    console.log('点击了取消');
    setVisible(!visible);
  };

  const handleClickConfirm = ()=>{
    console.log('点击了确认');
    setVisible(!visible);
  };

  return (
    <div>
      <Dialog
        visible={visible}
        footer={
          [
            <Button onClick={handleClickCancel} buttonType='link'>取消</Button>,
            <Button onClick={handleClickConfirm} buttonType='link'>确认</Button>
          ]
        }
        handleClickXOrMask={()=>{setVisible(!visible)}}
        closeOnClickMask={false}
      >
        dialog 内容
      </Dialog>
      <Button onClick={handleClickButton}>打开 dialog 的第一种方法</Button>
    </div>
  );
};

export default DialogExample1;
