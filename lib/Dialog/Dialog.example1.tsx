import * as React from 'react';
import Dialog from './Dialog';
import { useState } from 'react';
import Button from '../Button';

const DialogExample1: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
  };

  // const test = ()=>{
  //   const test1 = ()=>{
  //     console.log(2);
  //   };
  //   const closeModalFun = alert({
  //     text: (
  //       <div>
  //         <h1>test123</h1>
  //         <p>nihaifdsa</p>
  //         <button onClick={()=>{closeModalFun()}}>关闭这个 modal </button>
  //       </div>
  //     ),
  //     buttons: [
  //       <button onClick={()=>{console.log(1);}}>test1</button>,
  //       <button onClick={test1}>test1</button>,
  //     ]
  //   })
  // };

  const handleClickCancel = ()=>{
    console.log('点击了取消');
  };

  const handleClickConfirm = ()=>{
    console.log('点击了确认');
  };

  return (
    <div>
      <Dialog
        visible={visible}
        buttons={
          [
            <Button onClick={handleClickCancel}>取消</Button>,
            <Button onClick={handleClickConfirm}>确认</Button>
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
