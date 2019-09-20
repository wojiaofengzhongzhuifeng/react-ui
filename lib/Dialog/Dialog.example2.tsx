import * as React from 'react';
import {DialogFun} from './Dialog';
import Button from '../Button';


const DialogExample2: React.FunctionComponent = ()=> {
  const showDialog = ()=>{
    const handleClickClose = ()=>{
      closeDialogFun();
    };
    const closeDialogFun = DialogFun({
      children: (
        <div>
          jfdklsj
          jfkdla
          <Button onClick={handleClickClose} buttonType='link'>关闭</Button>
        </div>
      ),
    })
  };




  return (
    <div>
      <Button onClick={showDialog}>打开 dialog 的第二种方法</Button>
    </div>
  );
};

export default DialogExample2;
