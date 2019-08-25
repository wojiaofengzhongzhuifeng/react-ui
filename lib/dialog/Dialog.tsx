import * as React from 'react';
import { scopeClass } from '../helpers/classes';
import './dialog.scss';
import { ReactElement } from 'react';

interface Props {
  visible: Boolean
  buttons: Array<ReactElement>
}

const sc = scopeClass('rao-dialog');

console.log(sc('mask'));
console.log(sc());


const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children, buttons} = props;

  const result = visible ? (<div>
    <div className={sc('mask')}/>
    <div className={sc()}>
      <header className={sc('header')}>
        提示
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
