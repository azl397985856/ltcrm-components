import React, { PropTypes, Component } from 'react';
import {Table, Checkbox, Select } from 'antd';
import R from 'ramda';
const CheckboxGroup = Checkbox.Group;

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
const oldColumns = [{
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
Array.prototype.remove=function(dx)
　{
　　if(isNaN(dx)||dx>this.length){return false;}
　　for(var i=0,n=0;i<this.length;i++)
　　{
　　　　if(this[i]!=this[dx])
　　　　{
　　　　　　this[n++]=this[i]
　　　　}
　　}
　　this.length-=1
　}
const EditableTable = React.createClass({
	getInitialState(props) {
		return {
			visible: true,
		} 
	},
	getkey(title) {
		let ret;
		oldColumns.map((column) => {
			if (column.title === title) {
				ret = column.key;
			}
		});
		return ret;
	},
	getDataIndex(title) {
		let ret;
		oldColumns.map((column) => {
			if (column.title === title) {
				ret = column.dataIndex;
			}
		});
		return ret;
	},
	onChange(value) {
		let editableTableColumnArray = [];
			editableTableColumn.map((column) => {
				editableTableColumnArray.push(column.title);
 		 	});
		if (value.length <= editableTableColumn.length) {
			R.difference(editableTableColumnArray, value).map((deletedColumn) => {
				for (let i = 0; i < oldColumns.length; i++) {
					oldColumns[i].title === deletedColumn ? editableTableColumn.remove(i) : '';
				}
			});
		} else {
			const title = R.difference(value, editableTableColumnArray).join('');
			const dataIndex = this.getDataIndex(title);
			console.log(dataIndex, title);
			const key = this.getkey(title);
			editableTableColumn.push({
				title: title,
				dataIndex: dataIndex,
				key: key,
			});
		}
		this.setState({});
	},
	handleChange(value) {
		console.log(`selected ${value}`);
		if (value === 'line') {
			this.setState({
				bordered: true
			});
		} else if (value = 'none') {
			this.setState({
				bordered: false
			});
		}
	},
	render() {
	return (
	    <div>
	      <Table columns={editableTableColumn} dataSource={editableTableColumnData} bordered={this.state.bordered} />
	       <Select showSearch
				style={{ width: 200 }}
				placeholder="请选择边框样式"
				optionFilterProp="children"
				notFoundContent="无法找到"
				searchPlaceholder="输入关键词"
				onChange={this.handleChange}>
				<Option value="line">实线</Option>
				<Option value="dot">虚线</Option>
				<Option value="none">无样式</Option>
			</Select>
	    </div>
	);
	}
});
export default EditableTable;
module.exports = exports['default'];

