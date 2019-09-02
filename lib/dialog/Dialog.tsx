import * as React from 'react';
import ReactDOM from 'react-dom';
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

  const reactPortal = ReactDOM.createPortal(result, document.querySelector('body') as Element);

  return (
    <div>
      {reactPortal}
    </div>
  )
};

export const alert = (options)=>{
  const div = document.createElement('div');
  document.body.appendChild(div);
  const ReactComponent = (
    <Dialog
      visible={true}
      buttons={
        [
          <button>test</button>,
          <button>test123321</button>
        ]
      }
      closeOnClickMask={false}
      handleClose={()=>{
        ReactDOM.render(React.cloneElement(ReactComponent, {visible: false}), div);
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
      }}
    >
      {options.text}
    </Dialog>
  );

  ReactDOM.render(ReactComponent, div)
};

export default Dialog;
