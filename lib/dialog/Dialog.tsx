import * as React from 'react';

interface Props {
  visible: Boolean
}

const Dialog: React.FunctionComponent<Props> = (props)=> {
  const {visible, children} = props;

  const content = visible ? children : null;
  return (
    <div>
      {content}
    </div>
  )
};

export default Dialog;
