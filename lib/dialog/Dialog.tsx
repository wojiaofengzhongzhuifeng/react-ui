import * as React from 'react';
import ReactDOM from 'react-dom';
import { scopeClass } from '../helpers/classes';
import './dialog.scss';
import { ReactElement, Fragment } from 'react';
import Icon from '../icon/Icon';
import Card from '../Card/Card';

interface Props extends React.Props<any>{
  visible: Boolean
  buttons?: Array<ReactElement>
  handleClickXOrMask: React.MouseEventHandler
  closeOnClickMask?: Boolean
}

interface AlertProps {
  closeOnClickMask?: boolean
  buttons?: Array<ReactElement>
  text: string | ReactElement
}

const sc = scopeClass('rao-dialog');

console.log(sc('mask'));
console.log(sc());


const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children, buttons, handleClickXOrMask, closeOnClickMask} = props;

  const handleClickIcon:React.MouseEventHandler = (e)=>{
    handleClickXOrMask(e);
  };

  const handleClickMask: React.MouseEventHandler = (e)=>{
    if(closeOnClickMask){
      handleClickXOrMask(e);
    }
  };

  const result = visible ? (<div>
    <div className={sc('mask')} onClick={handleClickMask}/>
    <Card className={sc()}>
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
        {buttons && buttons.map((item, key)=>{
          return React.cloneElement(item, {key})
        })}
      </footer>
    </Card>
  </div>) : null;

  const reactPortal = ReactDOM.createPortal(result, document.querySelector('body') as Element);

  return (
    <div>
      {reactPortal}
    </div>
  )
};



export const alert = (options: AlertProps)=>{
  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeModal = ()=>{
    ReactDOM.render(React.cloneElement(ReactComponent, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  // 为用户 footer 添加点击事件，事件执行「关闭modal」操作 + 用户想要执行的代码。
  const addClickHandleButtons = options.buttons && options.buttons.map((item)=>{
    return React.cloneElement(item, {onClick: ()=>{
        item.props.onClick();
        closeModal();
      }})
  });

  const ReactComponent = (
    <Dialog
      visible={true}
      buttons={addClickHandleButtons}
      closeOnClickMask={options.closeOnClickMask}
      handleClickXOrMask={()=>{
        closeModal();
      }}
    >
      {options.text}
    </Dialog>
  );

  ReactDOM.render(ReactComponent, div);

  return closeModal;
};

export default Dialog;
