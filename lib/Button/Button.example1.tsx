import * as React from 'react';
import Button from './Button';
import { useState } from 'react';

const ButtonExample1: React.FunctionComponent = ()=>{

  const [useLinkLoading, setLinkLoading] = useState(false);

  const [useDefaultLoading, setDefaultLoading] = useState(false);


  const handleClickLink: React.MouseEventHandler = (e)=>{
    console.log(e);
    setLinkLoading(!useLinkLoading);
  };

  const handleClickDefault: React.MouseEventHandler = (e)=>{
    console.log(e);
    setDefaultLoading(!useDefaultLoading);
  };

  const handleClickPrimary: React.MouseEventHandler = (e)=>{
    console.log(e);
  };

  return (
    <div>
      <Button
        buttonType='link'
        className={'userLinkClass'}
        icon={"apple"}
        onClick={handleClickLink}
        loading={useLinkLoading}
        href={"http://www.baidu.com"}
        target='_blank'
      >
        link
      </Button>
      <Button
        buttonType='default'
        className={'userDefailtClass'}
        icon={"api"}
        onClick={handleClickDefault}
        loading={useDefaultLoading}
      >
        default
      </Button>
      <Button
        buttonType='primary'
        onClick={handleClickPrimary}
      >
        primary
      </Button>
    </div>
  )
};

export default ButtonExample1
