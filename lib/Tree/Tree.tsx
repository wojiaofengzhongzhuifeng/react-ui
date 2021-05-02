
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';
import {TreeItem} from './tree.d';


const sc = scopeClass('rao-tree');

console.log(sc('1'));
console.log(sc({'active': true, 'active1': false}));


interface TreeProps {
  sourceData: TreeItem[]
  selected: string,
  onChange: (clickedItem: TreeItem, isChecked: boolean)=>void
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
      <input type="checkbox"/>
      {children && children.map((treeItem)=>{
        console.log(treeItem);
        return <TreeItem2 {...treeItem}/>
      })}
    </div>
  )
}

const TreeItem3 = (item: TreeItem, level = 0, selected: string, fn: (clickedItem: TreeItem, isChecked: boolean)=>void) => {
  const {key, value, children} = item;
  let currentLevel = level + 1;
  let levelClassName = `item-level-${currentLevel}`

  const isChecked = selected === key;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    fn(item, e.target.checked)
  }

  return <div key={key}  className={sc({[levelClassName]: true})}>
    <div><input type="checkbox" checked={isChecked} onChange={onChange}/>{value}</div>
    {children && children.map(sub => {
      return TreeItem3(sub, level + 1, selected, fn);
    })}
  </div>;
};

const Tree: React.FunctionComponent<TreeProps> = (props)=> {
  return (
		<div>
      selected: {props.selected}
      {
        props.sourceData && props.sourceData.map((treeItem)=>{
          // return <TreeItem1 sourceData={treeItem}/>
          // return <TreeItem2 {...treeItem}/>
          return TreeItem3(treeItem, 0, props.selected, props.onChange)
        })
      }
    </div>
  )
};

export default Tree;
