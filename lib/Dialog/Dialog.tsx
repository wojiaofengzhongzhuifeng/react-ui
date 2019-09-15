import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { scopeClass } from '../helpers/classes';
import './dialog.scss';
import { ReactElement, Fragment } from 'react';
import Icon from '../icon/Icon';
import Card from '../Card/Card';

interface Props extends React.Props<any>{
  visible: Boolean
  footer?: Array<ReactElement>
  handleClickXOrMask?: React.MouseEventHandler //TODO: 不需要这个属性
  closeOnClickMask?: Boolean
  title?: string
}

type DialogFunProps = Omit<Props, 'visible'>

const sc = scopeClass('rao-dialog');

console.log(sc('mask'));

const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children, footer, handleClickXOrMask, closeOnClickMask, title} = props;

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
    <Card className={sc()} style={{padding: 0}}>
      <header className={sc('header')}>
        <Fragment>
          <h2>{title ? title : '信息'}</h2>
        </Fragment>
        <Icon iconName='close' onClick={handleClickIcon}/>
      </header>
      <main className={sc('main')}>
        {children}
      </main>
      <footer className={sc('footer')}>
        {footer && footer.map((item, key)=>{
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



export const DialogFun = (options: DialogFunProps)=>{
  const div = document.createElement('div');
  document.body.appendChild(div);

  const closeModal = ()=>{
    ReactDOM.render(React.cloneElement(ReactComponent, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };

  // 为用户 footer 添加点击事件，事件执行「关闭modal」操作 + 用户想要执行的代码。
  const addClickHandleButtons = options.footer && options.footer.map((item)=>{
    return React.cloneElement(item, {onClick: ()=>{
        item.props.onClick();
        closeModal();
      }})
  });

  const ReactComponent = (
    <Dialog
      visible={true}
      footer={addClickHandleButtons}
      closeOnClickMask={options.closeOnClickMask}
      handleClickXOrMask={()=>{
        closeModal();
      }}
    >
      {options.children}
    </Dialog>
  );

  ReactDOM.render(ReactComponent, div);

  return closeModal;
};

Dialog.defaultProps = {
  closeOnClickMask: false,
};

export default Dialog;
