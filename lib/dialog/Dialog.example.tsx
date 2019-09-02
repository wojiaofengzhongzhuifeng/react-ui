import * as React from 'react';
import Dialog, {alert} from './Dialog';
import { useState } from 'react';

const DialogExample: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
  };

  const test = ()=>{
    alert({text: 123321})
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
        handleClose={()=>{setVisible(!visible)}}
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
