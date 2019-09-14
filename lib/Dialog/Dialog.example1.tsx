import * as React from 'react';
import Dialog, {alert} from './Dialog';
import { useState } from 'react';

const DialogExample1: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
  };

  const test = ()=>{
    const test1 = ()=>{
      console.log(2);
    };
    const closeModalFun = alert({
      text: (
        <div>
          <h1>test123</h1>
          <p>nihaifdsa</p>
          <button onClick={()=>{closeModalFun()}}>关闭这个 modal </button>
        </div>
      ),
      buttons: [
        <button onClick={()=>{console.log(1);}}>test1</button>,
        <button onClick={test1}>test1</button>,
      ]
    })
  };

  return (
    <div>
      <h1>Dialog</h1>
      <Dialog
        visible={visible}
        buttons={
          [
            <button>test</button>,
            <button>test123321</button>
          ]
        }
        handleClickXOrMask={()=>{setVisible(!visible)}}
        closeOnClickMask={false}
      >
        hi this is me
      </Dialog>
      <button onClick={handleClickButton}>打开 dialog</button>
    </div>
  );
};

export default DialogExample1;
