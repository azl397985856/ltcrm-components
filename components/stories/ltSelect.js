import React from 'react';
import {Table, Icon, Checkbox } from 'antd';
import DragableTextArea from '../DragableTextArea/index';
import DragableTextImage from '../DragableImage/index';
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
  storiesOf('select-awesome', module)
  .add('tableSelect', () => {
    return (
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>tableSelect</h2>
        <div className="box">
          <div className="title">API</div>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
