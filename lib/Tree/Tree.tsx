
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';
import {TreeItem} from './tree.d';


const sc = scopeClass('rao-tree');

console.log(sc);

interface TreeProps {
  sourceData: TreeItem[]
}

const Tree: React.FunctionComponent<TreeProps> = (props)=> {
  return (
		<div>{JSON.stringify(props.sourceData)}</div>
  )
};

export default Tree;
