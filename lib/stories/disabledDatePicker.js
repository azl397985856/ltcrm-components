'use strict';

var _index = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

var _index7 = require('../DisabledDatePicker/index.js');

var _index8 = _interopRequireDefault(_index7);

var _storybook = require('@kadira/storybook');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'components/stories/disabledDatePicker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'components/stories/disabledDatePicker.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

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
  name: 'start',
  desc: '代表它是开始时间',
  type: 'bool或不填',
  default: ''
}, {
  name: 'end',
  desc: '代表它是结束时间',
  type: 'bool或不填',
  default: ''
}, {
  name: 'value',
  desc: '时间值',
  type: 'Date',
  default: ''
}, {
  name: 'onChange',
  desc: '时间变化的回调函数',
  type: 'func',
  default: 'noop'
}, {
  name: 'placeholder',
  desc: '占位字符',
  type: 'string',
  default: ''
}];
var Sample = _wrapComponent('_component')(_react3.default.createClass({
  displayName: 'Sample',
  getInitialState: function getInitialState() {
    return {};
  },
  onStartTimeChange: function onStartTimeChange(value) {
    this.setState({
      startTime: value
    });
  },
  onEndTimeChange: function onEndTimeChange(value) {
    this.setState({
      endTime: value
    });
  },
  render: function render() {
    return _react3.default.createElement(
      'div',
      null,
      _react3.default.createElement(
        'div',
        null,
        '开始时间：',
        _react3.default.createElement(_index8.default, { start: true, value: this.state.startTime, end: this.state.endTime, onChange: this.onStartTimeChange }),
        '  结束时间：',
        _react3.default.createElement(_index8.default, { end: true, value: this.state.endTime, start: this.state.startTime, onChange: this.onEndTimeChange })
      ),
      _react3.default.createElement(
        'div',
        { className: 'lt-com-box' },
        _react3.default.createElement(
          'span',
          { className: 'lt-com-title' },
          'Code List'
        ),
        _react3.default.createElement(
          'div',
          { className: 'component' },
          '开始时间: ',
          '<DisabledDatePicker start value={this.state.startTime} end={this.state.endTime} onChange={this.onStartTimeChange}/>',
          _react3.default.createElement('br', null),
          '结束时间：',
          '<DisabledDatePicker end value={this.state.endTime} start={this.state.startTime} onChange={this.onEndTimeChange}/>'
        )
      )
    );
  }
}));
(0, _storybook.storiesOf)('DisabledDatePicker', module).add('DisabledDatePicker', function () {
  return _react3.default.createElement(
    'div',
    { className: 'lt-com-container' },
    _react3.default.createElement(
      'h2',
      { style: { textAlign: 'center', marginBottom: 15, color: '#4078c0' } },
      'DisabledDatePicker'
    ),
    _react3.default.createElement(Sample, null),
    _react3.default.createElement(
      'div',
      { className: 'lt-com-box' },
      _react3.default.createElement(
        'div',
        { className: 'lt-com-title' },
        'API'
      ),
      _react3.default.createElement(
        'div',
        { className: 'lt-com-code-interface' },
        _react3.default.createElement(_antd.Table, { columns: columns, dataSource: data })
      )
    )
  );
});