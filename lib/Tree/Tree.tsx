
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';
import {TreeItem} from './tree.d';


const sc = scopeClass('rao-tree');

console.log(sc('1'));
console.log(sc({'active': true, 'active1': false}));


interface TreeProps {
  sourceData: TreeItem[]
}
interface TreeItemProps1 {
  sourceData: TreeItem
}
interface TreeItemProps2{
  key: string,
  value: string,
  children?: TreeItem[]
}
const TreeItem1: React.FunctionComponent<TreeItemProps1> = (props)=>{
  console.log('props', props);
  return (
    <div key={props.sourceData.key}>
      {props.sourceData.value}
      {props.sourceData.children && props.sourceData.children.map((treeItem)=>{
        return <TreeItem1 sourceData={treeItem}/>
      })}
    </div>
  )
}
const TreeItem2: React.FunctionComponent<TreeItemProps2> = (props)=>{
  const {value, children} = props;
  console.log('props', props);
  return (
    <div key={value}>
      {value}
      {children && children.map((treeItem)=>{
        console.log(treeItem);
        return <TreeItem2 {...treeItem}/>
      })}
    </div>
  )
}

const TreeItem3 = (item: TreeItem) => {
  const {key, value, children} = item;

  return <div key={key}>
    {value}
    {children && children.map(sub => {
      return TreeItem3(sub);
    })}
  </div>;
};

const Tree: React.FunctionComponent<TreeProps> = (props)=> {
  return (
		<div>
      {
        props.sourceData && props.sourceData.map((treeItem)=>{
          // return <TreeItem1 sourceData={treeItem}/>
          // return <TreeItem2 {...treeItem}/>
          return TreeItem3(treeItem)
        })
      }
    </div>
  )
};

export default Tree;
