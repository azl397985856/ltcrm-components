'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragableTextArea = _react2.default.createClass({
  displayName: 'DragableTextArea',
  getInitialState: function getInitialState(props) {
    return {
      visible: true
    };
  },
  handleSave: function handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  },
  onClose: function onClose(e) {
    this.handleSave('ee');
  },
  render: function render() {
    return _react2.default.createElement(_antd.Alert, { message: '错误提示的文案',
      description: '错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍',
      type: 'error',
      closable: true,
      onClose: this.onClose });
  }
});

DragableTextArea.propTypes = {
  addTodo: _react.PropTypes.func.isRequired
};

exports.default = DragableTextArea;

module.exports = exports['default'];