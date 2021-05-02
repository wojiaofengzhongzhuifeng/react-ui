
import * as React from 'react';
import Tree from './Tree';
import {TreeItem} from './tree.d';
import {useState} from "react";

const treeData: TreeItem[] = [
  {
    key: '1',
    value: '1',
    children: [
      {key: '1.1',value: '1.1', children: [{key: '1.1.1', value: '1.1.1'}]},
      {key: '1.2',value: '1.2', children: [{key: '1.2.1', value: '1.2.1'}]},
      {key: '1.3',value: '1.3', children: [{key: '1.3.1', value: '1.3.1'}]}
    ]
  },
  {
    key: '2',
    value: '2',
    children: [
      {key: '2.1',value: '2.1', children: [{key: '2.1.1', value: '2.1.1'}]}
    ]
  },
  {
    key: '3',
    value: '3',
    children: [
      {key: '3.1',value: '3.1', children: [{key: '3.1.1', value: '3.1.1'}]}
    ]
  }
];


const TreeExample1: React.FunctionComponent = ()=>{
  const [selected, setSelected] = useState('1');
  const onChange = (clickedItem: TreeItem, isClicked: boolean)=>{
    if(isClicked){
      setSelected(clickedItem.key)
    } else {
      setSelected('')
    }
  }
  return (
    <div>
			<Tree sourceData={treeData} selected={selected} onChange={onChange}/>
    </div>
  )
};

export default TreeExample1

