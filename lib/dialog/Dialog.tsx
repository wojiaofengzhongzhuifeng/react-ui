import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './dialog.scss';
import { ReactElement, Fragment } from 'react';
import Icon from '../icon/Icon';

interface Props {
  visible: Boolean
  buttons: Array<ReactElement>
  handleClose: React.MouseEventHandler
  closeOnClickMask?: Boolean
}

const sc = scopeClass('rao-dialog');

console.log(sc('mask'));
console.log(sc());


const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children, buttons, handleClose, closeOnClickMask} = props;

  const handleClickIcon:React.MouseEventHandler = (e)=>{
    handleClose(e);
  };

  const handleClickMask: React.MouseEventHandler = (e)=>{
    if(closeOnClickMask){
      handleClose(e);
    }
  };

  const result = visible ? (<div>
    <div className={sc('mask')} onClick={handleClickMask}/>
    <div className={sc()}>
      <header className={sc('header')}>
        <Fragment>
          <p>信息</p>
        </Fragment>
        <Icon iconName='close' onClick={handleClickIcon}/>
      </header>
      <main className={sc('main')}>
        {children}
      </main>
      <footer className={sc('footer')}>
        {buttons.map((item, key)=>{
          return React.cloneElement(item, {key})
        })}
      </footer>
    </div>
  </div>) : null;

  return (
    <div>
      {result}
    </div>
  )
};

export default Dialog;
