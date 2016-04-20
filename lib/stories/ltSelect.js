'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

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
(0, _storybook.storiesOf)('select-awesome', module).add('tableSelect', function () {
  return _react2.default.createElement(
    'div',
    { className: 'lt-com-container' },
    _react2.default.createElement(
      'h2',
      { style: { textAlign: 'center', marginBottom: 15, color: '#4078c0' } },
      'tableSelect'
    ),
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