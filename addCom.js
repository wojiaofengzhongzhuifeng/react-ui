// 获取用户参数
var arguments = process.argv.splice(2);
var fs = require('fs');
var path = require('path');

const componentName = arguments[0];

const mkdirPath = path.resolve(__dirname, `./lib/${componentName}`);


const buttonDemoString = `
import * as React from 'react';
import Card from '../Card/Card';
import Demo from '../../demo';
import ${componentName}Example1 from './${componentName}.example1';
import Table, { Column, DataSource } from '../Table/Table';
import ${componentName} from './${componentName}';

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
`

// 创建 Tab 文档
fs.mkdir(mkdirPath, null, (err)=>{
	if(!err){
		fs.writeFile(`${mkdirPath}/${componentName}.demo.tsx`, buttonDemoString, (err)=>{
			console.log(err);
		})
	}
});



