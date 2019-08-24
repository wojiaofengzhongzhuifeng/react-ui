import * as React from 'react';

interface Props {
  visible: Boolean
}

const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children} = props;

  const result = visible ? (<div>
    <div className="rao-dialog-mask"/>
    <div className="rao-dialog">
      <header className="rao-dialog-header">
        提示
      </header>
      <main className="rao-dialog-main">
        {children}
      </main>
      <footer className="rao-dialog-footer">
        <button>tset</button>
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
