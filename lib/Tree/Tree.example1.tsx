
import * as React from 'react';
import Tree from './Tree';
import {TreeItem} from './tree.d';

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
  return (
    <div>
			<Tree sourceData={treeData}/>
    </div>
  )
};

export default TreeExample1

