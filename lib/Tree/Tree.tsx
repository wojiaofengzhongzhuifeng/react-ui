
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';
import {TreeItem} from './tree.d';
import {useState} from "react";


const sc = scopeClass('rao-tree');

console.log(sc('1'));
console.log(sc({'active': true, 'active1': false}));


interface TreeProps {
  sourceData: TreeItem[]
  selected: string | string[],
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
interface TreeItemProps3 {
  item: TreeItem,
  level: number,
  treeProps: TreeProps
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

const TreeItem3 = (item: TreeItem, level = 0, selected: string|string[], fn: (clickedItem: TreeItem, isChecked: boolean)=>void) => {
  const {key, value, children} = item;
  const [expanded, setExpanded] = useState(true)
  let currentLevel = level + 1;
  let levelClassName = `item-level-${currentLevel}`

  const computedIsChecked = ()=>{
    if(typeof selected === 'string'){
      return selected === key
    } else {
      return selected.includes(key)
    }
  }

  const isChecked = computedIsChecked();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    fn(item, e.target.checked)
  }

  const onExpand = ()=>{
    setExpanded(true);
  }
  const onCollapse = ()=>{
    setExpanded(false);
  }

  return <div key={key}  className={sc({[levelClassName]: true})}>
    <div>
      {
        item.children ? <span>
          {expanded ? <span onClick={onCollapse} style={{cursor:'pointer'}}>-</span> : <span onClick={onExpand} style={{cursor:'pointer'}}>+</span>}
        </span> : <span style={{width: '15px', height: '15px', display:"inline-block"}} />
      }
      <input type="checkbox" checked={isChecked} onChange={onChange}/>{value}
    </div>
    <div className={`${sc('item-ct')} ${sc({item: true, collapsed: !expanded})}`}>
      {children && children.map(sub => {
        return TreeItem3(sub, level + 1, selected, fn);
      })}
    </div>

  </div>;
};

const TreeItem4: React.FunctionComponent<TreeItemProps3> = ({item, level, treeProps})=>{
  const {key, value, children} = item;
  const [expanded, setExpanded] = useState(true)
  let currentLevel = level + 1;
  let levelClassName = `item-level-${currentLevel}`

  const computedIsChecked = ()=>{
    if(typeof treeProps.selected === 'string'){
      return treeProps.selected === key
    } else {
      return treeProps.selected.includes(key)
    }
  }

  const isChecked = computedIsChecked();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    treeProps.onChange(item, e.target.checked)
  }

  const onExpand = ()=>{
    setExpanded(true);
  }
  const onCollapse = ()=>{
    setExpanded(false);
  }

  return <div  key={key} className={sc({[levelClassName]: true})}>
    <div>
      {
        item.children ? <span>
          {expanded ? <span onClick={onCollapse} style={{cursor:'pointer'}}>-</span> : <span onClick={onExpand} style={{cursor:'pointer'}}>+</span>}
        </span> : <span style={{width: '15px', height: '15px', display:"inline-block"}} />
      }
      <input type="checkbox" checked={isChecked} onChange={onChange}/>{value}
    </div>
    <div className={`${sc('item-ct')} ${sc({item: true, collapsed: !expanded})}`}>
      {children && children.map((sub: TreeItem) => {
        // return TreeItem3(sub, level + 1, treeProps.selected);
        return <TreeItem4 item={sub} level={level + 1} treeProps={treeProps}/>
      })}
    </div>

  </div>;
}

const Tree: React.FunctionComponent<TreeProps> = (props)=> {
  return (
		<div>
      selected: {props.selected}
      {
        props.sourceData && props.sourceData.map((treeItem)=>{
          // return <TreeItem1 sourceData={treeItem}/>
          // return <TreeItem2 {...treeItem}/>
          // return TreeItem3(treeItem, 0, props.selected, props.onChange)
          return <TreeItem4  item={treeItem} level={0} treeProps={props}/>
        })
      }
    </div>
  )
};

export default Tree;
