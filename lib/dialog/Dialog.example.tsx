import * as React from 'react';
import Dialog, {alert} from './Dialog';
import { useState } from 'react';

const DialogExample: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
  };

  const test = ()=>{
    const test1 = ()=>{
      console.log(2);
    };
    alert({
      text: "test",
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
      <button onClick={test}>test</button>
    </div>
  );
};

export default DialogExample;
