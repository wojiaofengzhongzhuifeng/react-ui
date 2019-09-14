import * as React from 'react';
import {DialogFun} from './Dialog';
import Button from '../Button';


const DialogExample2: React.FunctionComponent = ()=> {

  const showDialog = ()=>{
    console.log('showDialog');
    DialogFun({
      text: "动态生成"
    })
  };

  return (
    <div>
      <Button onClick={showDialog}>打开 dialog 的第二种方法</Button>
    </div>
  );
};

export default DialogExample2;
