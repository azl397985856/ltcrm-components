import React from 'react';
import {Table, Icon, Checkbox } from 'antd';
import EditableTable from '../EditableTable/index';
import ChangeStyleTable from '../ChangeStyleTable/index';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';
const CheckboxGroup = Checkbox.Group;

const columns = [{
  title: '参数',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '说明',
  dataIndex: 'desc',
  key: 'desc',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  }, {
  title: '默认值',
  dataIndex: 'default',
  key: 'default',
}];
const data = [{
  name: 'defaultValue',
  desc: '默认的列表',
  type: 'Array',
  default: '[]'
}, {
 name: 'dataSource',
  desc: '表格的数据源',
  type: 'Array',
  default: '[]'
}, {
  name: 'columns',
  desc: '表格的列',
  type: 'Array',
  default: '[]'
}];
const editableTableColumnData = [{
  id: 1,
  name: '张三',
  addr: '河南',
  memo: '帅'
}, {
  id: 2,
  name: '李四',
  addr: '河南',
  memo: '贼帅'
},
{
  id: 3,
  name: '王五',
  addr: '杭州',
  memo: '丑'
}
];
const editableTableColumn = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '名字',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '地址',
  dataIndex: 'addr',
  key: 'addr',
  }, {
  title: '说明',
  dataIndex: 'memo',
  key: 'memo',
}];
  storiesOf('Table', module)
  .add('editableColumn', () => {
    return (
      <div className="container">
       <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>EditableTable</h2>
        <EditableTable defaultValue={['ID', '名字', '地址', '说明']} dataSource={editableTableColumnData} columns={editableTableColumn}/>
        <div className="box">
          <div className="title">API</div>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  }).add('editableStyle', () => {
    return (
       <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>ChangeStyleTable</h2>
        <ChangeStyleTable/>
        <div className="box">
          <div className="title">API</div>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
