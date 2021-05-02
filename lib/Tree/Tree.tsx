
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';

const sc = scopeClass('rao-tree');

console.log(sc);

interface TreeProps {}

const Tree: React.FunctionComponent<TreeProps> = (props)=> {
  return (
		<div>Tree</div>
  )
};

export default Tree;
