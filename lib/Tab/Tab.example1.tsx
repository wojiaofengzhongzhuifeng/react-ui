import * as React from 'react';
import {Tab, TabPane} from './Tab';
import {ReactText, useState} from "react";

const TabExample1: React.FunctionComponent = ()=>{
  const [tabKey, setTabKey] = useState<ReactText>('1');

  const onChange = (e: any, clickedTabPaneKey: ReactText)=>{
    setTabKey(clickedTabPaneKey)
  }
  return (
    <div>
      <Tab activeKey={tabKey} onChange={onChange}>
        <TabPane key="1" tabName={'体育'}>
          体育内容
        </TabPane>
        <TabPane key="2" tabName={'科技'}>
          科技内容
        </TabPane>
        <TabPane key="3" tabName={'生活'}>
          生活内容
        </TabPane>
      </Tab>
    </div>
  )
};

export default TabExample1
