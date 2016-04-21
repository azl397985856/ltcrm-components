'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = _antd.Checkbox.Group;

Array.prototype.remove = function (dx) {
	if (isNaN(dx) || dx > this.length) {
		return false;
	}
	for (var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[dx]) {
			this[n++] = this[i];
		}
	}
	this.length -= 1;
};
var EditableTable = _react2.default.createClass({
	displayName: 'EditableTable',
	getInitialState: function getInitialState() {
		return {
			selectedColumns: this.props.defaultValue,
			editableTableColumn: this.props.columns,
			oldColumns: _ramda2.default.clone(this.props.columns),
			value: this.props.defaultValue
		};
	},
	getkey: function getkey(title) {
		var ret = undefined;
		console.log(this.state.oldColumns);
		this.state.oldColumns.map(function (column) {
			if (column.title === title) {
				ret = column.key;
			}
		});
		return ret;
	},
	remove: function remove(title) {
		console.log(title);
		var editableTableColumn = this.state.editableTableColumn;
		for (var i = 0; i < editableTableColumn.length; i++) {
			if (editableTableColumn[i].title === title) {
				editableTableColumn.remove(i);
			}
		}
	},
	getDataIndex: function getDataIndex(title) {
		var ret = undefined;
		this.state.oldColumns.map(function (column) {
			if (column.title === title) {
				ret = column.dataIndex;
			}
		});
		return ret;
	},
	onChange: function onChange(value) {
		var _this = this;

		var editableTableColumn = this.state.editableTableColumn;
		var editableTableColumnArray = [];
		editableTableColumn.map(function (column) {
			editableTableColumnArray.push(column.title);
		});
		if (value.length === 0) {
			// delete all columns is not allowed
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
		if (value.length <= editableTableColumn.length) {
			// uncheck one
			_ramda2.default.difference(editableTableColumnArray, value).map(function (deletedColumn) {
				//console.log(deletedColumn);
				_this.remove(deletedColumn);
			});
		} else {
			// check one
			var title = _ramda2.default.difference(value, editableTableColumnArray).join('');
			var dataIndex = this.getDataIndex(title);
			var key = this.getkey(title);
			editableTableColumn.push({
				title: title,
				dataIndex: dataIndex,
				key: key
			});
		}
	},
	render: function render() {
		console.log(this.props.columns);
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_antd.Table, { columns: this.state.editableTableColumn, dataSource: this.props.dataSource }),
			_react2.default.createElement(CheckboxGroup, { options: this.state.selectedColumns, defaultValue: this.state.selectedColumns, value: this.state.value, onChange: this.onChange })
		);
	}
});
EditableTable.propTypes = {
	default: _react.PropTypes.array
};
exports.default = EditableTable;

module.exports = exports['default'];