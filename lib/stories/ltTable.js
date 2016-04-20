'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

var _index = require('../EditableTable/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../ChangeStyleTable/index');

var _index4 = _interopRequireDefault(_index3);

var _storybook = require('@kadira/storybook');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = _antd.Checkbox.Group;

var columns = [{
  title: '参数',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '说明',
  dataIndex: 'desc',
  key: 'desc'
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type'
}, {
  title: '默认值',
  dataIndex: 'default',
  key: 'default'
}];
var data = [{
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
var editableTableColumnData = [{
  id: 1,
  name: '张三',
  addr: '河南',
  memo: '帅'
}, {
  id: 2,
  name: '李四',
  addr: '河南',
  memo: '贼帅'
}, {
  id: 3,
  name: '王五',
  addr: '杭州',
  memo: '丑'
}];
var editableTableColumn = [{
  title: 'ID',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '名字',
  dataIndex: 'name',
  key: 'name'
}, {
  title: '地址',
  dataIndex: 'addr',
  key: 'addr'
}, {
  title: '说明',
  dataIndex: 'memo',
  key: 'memo'
}];
(0, _storybook.storiesOf)('Table', module).add('editableColumn', function () {
  return _react2.default.createElement(
    'div',
    { className: 'lt-com-container' },
    _react2.default.createElement(
      'h2',
      { style: { textAlign: 'center', marginBottom: 15, color: '#4078c0' } },
      'EditableTable'
    ),
    _react2.default.createElement(_index2.default, { defaultValue: ['ID', '名字', '地址', '说明'], dataSource: editableTableColumnData, columns: editableTableColumn }),
    _react2.default.createElement(
      'div',
      { className: 'lt-com-box' },
      _react2.default.createElement(
        'div',
        { className: 'lt-com-title' },
        'API'
      ),
      _react2.default.createElement(
        'div',
        { className: 'lt-com-code-interface' },
        _react2.default.createElement(_antd.Table, { columns: columns, dataSource: data })
      )
    )
  );
}).add('editableStyle', function () {
  return _react2.default.createElement(
    'div',
    { className: 'lt-com-container' },
    _react2.default.createElement(
      'h2',
      { style: { textAlign: 'center', marginBottom: 15, color: '#4078c0' } },
      'ChangeStyleTable'
    ),
    _react2.default.createElement(_index4.default, null),
    _react2.default.createElement(
      'div',
      { className: 'lt-com-box' },
      _react2.default.createElement(
        'div',
        { className: 'lt-com-title' },
        'API'
      ),
      _react2.default.createElement(
        'div',
        { className: 'lt-com-code-interface' },
        _react2.default.createElement(_antd.Table, { columns: columns, dataSource: data })
      )
    )
  );
});