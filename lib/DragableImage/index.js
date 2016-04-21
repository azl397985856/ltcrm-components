'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DragableImage = _react2.default.createClass({
  displayName: 'DragableImage',
  getInitialState: function getInitialState() {
    return {
      visible: true
    };
  },
  handleSave: function handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  },
  onChange: function onChange(e) {
    this.setState({
      failureReason: e.target.value
    });
  },
  render: function render() {
    return _react2.default.createElement(
      _antd.Form,
      { horizontal: true, style: { margin: 20, width: '80%', height: '80%' } },
      _react2.default.createElement(
        _antd.Row,
        null,
        _react2.default.createElement(
          _antd.Col,
          null,
          _react2.default.createElement(_antd.Input, { placeholder: 'ooooooooooooooo', type: 'textarea', rows: '5', value: this.state.failureReason, onChange: this.onChange })
        )
      ),
      _react2.default.createElement(
        _antd.Row,
        { style: { marginTop: 10 } },
        _react2.default.createElement(
          _antd.Col,
          { offset: '22' },
          _react2.default.createElement(
            _antd.Button,
            { type: 'primary', disabled: this.state.failureReason === '', onClick: this.handleSubmit },
            '确定'
          )
        )
      )
    );
  }
});

DragableImage.propTypes = {
  addTodo: _react.PropTypes.func.isRequired
};

exports.default = DragableImage;

module.exports = exports['default'];