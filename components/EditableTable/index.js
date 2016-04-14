import React, { PropTypes, Component } from 'react';
import {Table, Checkbox } from 'antd';
import R from 'ramda';
const CheckboxGroup = Checkbox.Group;

Array.prototype.remove=function(dx) {
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
	getInitialState() {
		return {
			selectedColumns: this.props.defaultValue,
			editableTableColumn: this.props.columns,
			oldColumns: R.clone(this.props.columns),
			value: this.props.defaultValue,
		} 
	},
	getkey(title) {
		let ret;
		console.log(this.state.oldColumns);
		this.state.oldColumns.map((column) => {
			if (column.title === title) {
				ret = column.key;
			}
		});
		return ret;
	},
	remove(title) {
		console.log(title);
		const editableTableColumn = this.state.editableTableColumn;
	　　for(let i = 0; i < editableTableColumn.length; i++) {
			if (editableTableColumn[i].title === title) {
				editableTableColumn.remove(i);
			}
		} 
	},
	getDataIndex(title) {
		let ret;
		this.state.oldColumns.map((column) => {
			if (column.title === title) {
				ret = column.dataIndex;
			}
		});
		return ret;
	},
	onChange(value) {
		const editableTableColumn = this.state.editableTableColumn;
		let editableTableColumnArray = [];
		editableTableColumn.map((column) => {
			editableTableColumnArray.push(column.title);
	 	});
	 	if (value.length === 0) { // delete all columns is not allowed
			console.error('at least one column remained');
			this.setState({
				value: editableTableColumnArray
			});
			return;
		} else {
			this.setState({
				value: value
			});
		}
		if (value.length <= editableTableColumn.length) { // uncheck one
			R.difference(editableTableColumnArray, value).map((deletedColumn) => {
				//console.log(deletedColumn);
				this.remove(deletedColumn);
			});
		} else { // check one 
			const title = R.difference(value, editableTableColumnArray).join('');
			const dataIndex = this.getDataIndex(title);
			const key = this.getkey(title);
			editableTableColumn.push({
				title: title,
				dataIndex: dataIndex,
				key: key,
			});
		}
	},
	render() {
		console.log(this.props.columns);
		return (
		    <div>
		      <Table columns={this.state.editableTableColumn} dataSource={this.props.dataSource} />
		      <CheckboxGroup options={this.state.selectedColumns} defaultValue={this.state.selectedColumns} value={this.state.value} onChange={this.onChange} />
		    </div>
		);
		}
});
EditableTable.propTypes = {
  default: PropTypes.array,
}
export default EditableTable;
module.exports = exports['default'];

