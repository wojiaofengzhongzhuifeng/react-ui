import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import {ReactElement, ReactText} from "react";
import './style.scss';

interface TabProps extends React.Props<any>{
  activeKey: ReactText, // 当前选择的 key
  onChange: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, clickedTabPaneKey: ReactText)=>void, // 选择 tabPab
  children: Array<ReactElement>
}
interface TabPaneProps extends React.Props<any>{
  tabName: ReactText, // tabPane 名称
  key: ReactText, // tabPane 唯一标识符
}

const sc = scopeClass('rao-tab');

export const Tab: React.FunctionComponent<TabProps> = (
  {
    children,
    activeKey,
    onChange
  })=> {
  const onClickPaneHeader = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, clickedTabPaneKey: ReactText)=>{
    onChange(e, clickedTabPaneKey)
  }
  return (
    <div className={sc()}>
      <div className={sc('pane-header-ct')}>
        {children.map((tabPane)=>{
          const tabPaneKey = tabPane.key as ReactText;
          return (
            <div
              key={tabPaneKey}
              onClick={(e)=>{onClickPaneHeader(e, tabPaneKey)}}
              className={`${sc('pane-header')} ${tabPaneKey === activeKey ? 'active' : ''}`}
            >
              {tabPane && tabPane.props.tabName}
            </div>
          )
        })}
      </div>

      <div className={sc('pane-content-ct')}>
        {children.map((tabPane)=>{
          if(tabPane.key == activeKey){
            return (
              <div key={tabPane.key}>{tabPane && tabPane.props.children}</div>
            )
          } else {
            return null
          }
        })}
      </div>

    </div>
  )
};

export const TabPane: React.FunctionComponent<TabPaneProps> = ({tabName, key, children})=>{
  return (
    <div className={sc('pane')} key={key}>
    </div>
  )
}

