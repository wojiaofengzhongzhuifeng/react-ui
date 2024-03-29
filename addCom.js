// 获取用户参数
var arguments = process.argv.splice(2);
var fs = require('fs');
var path = require('path');

const componentName = arguments[0];
const lowerComponentName = componentName.replace(componentName[0],componentName[0].toLowerCase());


const mkdirPath = path.resolve(__dirname, `./lib/${componentName}`);

function getSearchIndex(array, search){
	for(let i=0;i<=array.length - 1;i++){
		const item = array[i]
		if(item.includes(search)){
			return i;
			break
		}
	}
	return -1
}

function insertStringToExample(tagString, insertString, fn){
	// 写入 example
	fs.readFile(`${__dirname}/example.tsx`, {
		encoding: 'utf-8'
	}, (err, data)=>{
		if(!err){
			const stringArray = data.split('\n');
			let searchIndex = getSearchIndex(stringArray, tagString);
			stringArray.splice(searchIndex + 1, 0, insertString);
			const exampleString = stringArray.join("\n");
			fs.writeFile(`${__dirname}/example.tsx`, exampleString, (err)=>{
				console.log(err);
				fn && fn();
			})
		}
	});
}

insertStringToExample(
	'add demo 1',
	`import ${componentName}Demo from './lib/${componentName}/${componentName}.demo';`,
	()=>{
		insertStringToExample(
			'add demo 2',
			`                <li>
                  <NavLink to="/${componentName}">${componentName}</NavLink>
                </li>`,
			()=>{
				insertStringToExample('add demo 3', `              <Route path="/${componentName}" exact component={${componentName}Demo} />`);
			}
		);
	}
);












const componentDemoString = `
import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import ${componentName}Example1 from './${componentName}.example1';
import Table, { Column, DataSource } from '../Table/Table';

const dataSource: Array<DataSource> = [
  {
    key: 1,
    arguments: 'type',
    description: '指定 button 的类型，根据类型，样式不同，可选类型有「\\'default\\', \\'primary\\', \\'link\\'」',
    type: 'string',
    defaultValue: '无',
  }
];

const columns: Array<Column> = [
  {
    title: '参数',
    key: 'arguments',
    dataIndex: 'arguments'
  },
  {
    title: '描述',
    key: 'description',
    dataIndex: 'description'
  },
  {
    title: '类型',
    key: 'type',
    dataIndex: 'type'
  },
  {
    title: '默认值',
    key: 'defaultValue',
    dataIndex: 'defaultValue'
  }
];

const ${componentName}Demo = () => {
  return (
    <div>
      <Card>
        <h2>概述</h2>
        test
      </Card>

      <Card>
        <h2>使用示例</h2>
        <Demo code={require('!!raw-loader!./${componentName}.example1.tsx').default}>
          <${componentName}Example1/>
        </Demo>
      </Card>

      <Card>
        <h2>API</h2>
        <Table dataSource={dataSource} columns={columns} />
      </Card>

      <Card>
        <h2>总结</h2>
      </Card>
    </div>
  );
};

export default ${componentName}Demo;
`;

const componentExampleString = `
import * as React from 'react';
import ${componentName} from './${componentName}';

const ${componentName}Example1: React.FunctionComponent = ()=>{
  return (
    <div>
			<${componentName} />
    </div>
  )
};

export default ${componentName}Example1

`;

const componentString = `
import * as React from 'react';
import { scopeClass } from '../helpers/helps';
import './style.scss';

const sc = scopeClass('rao-${lowerComponentName}');

console.log(sc);

interface ${componentName}Props {}

const ${componentName}: React.FunctionComponent<${componentName}Props> = (props)=> {
  return (
		<div>${componentName}</div>
  )
};

export default ${componentName};
`;

const indexString = `
import ${componentName} from './${componentName}';

export default ${componentName};
`;

// 创建 Tab 文档
fs.mkdir(mkdirPath, null, (err)=>{
	if(!err){
		// 创建组件文档
		fs.writeFile(`${mkdirPath}/${componentName}.demo.tsx`, componentDemoString, (err)=>{
			// 创建实例代码
			if(!err){
				fs.writeFile(`${mkdirPath}/${componentName}.example1.tsx`, componentExampleString, (err)=>{
					if(!err){
						// 创建组件代码
						fs.writeFile(`${mkdirPath}/${componentName}.tsx`, componentString, (err)=>{
							if(!err){
								fs.writeFile(`${mkdirPath}/index.tsx`, indexString, (err)=>{
									if(!err){
										fs.writeFile(`${mkdirPath}/style.scss`, "", (err)=>{
											if(!err){
											}
										})
									}
								})
							}
						})
					}
				})
			}
		})
	}
});



