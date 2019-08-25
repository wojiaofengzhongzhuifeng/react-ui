import * as React from 'react';
import Dialog from './Dialog';
import { useState } from 'react';

const DialogExample: React.FunctionComponent = ()=> {
  const [visible, setVisible] = useState<Boolean>(false);

  const handleClickButton = ()=>{
    setVisible(!visible);
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
      >
        hi this is me
      </Dialog>
      <button onClick={handleClickButton}>打开 dialog</button>
    </div>
  );
};

export default DialogExample;
