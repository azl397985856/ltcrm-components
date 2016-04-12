'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('E:\\storybook\\react-storybook\\react-storybook-demo\\node_modules\\babel-preset-react-hmre\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\storybook\\react-storybook\\react-storybook-demo\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\storybook\\react-storybook\\react-storybook-demo\\node_modules\\babel-preset-react-hmre\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _EStorybookReactStorybookReactStorybookDemoNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'components/DragableTextArea/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _EStorybookReactStorybookReactStorybookDemoNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'components/DragableTextArea/index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _EStorybookReactStorybookReactStorybookDemoNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_EStorybookReactStorybookReactStorybookDemoNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var DragableTextArea = _wrapComponent('_component')(_react3.default.createClass({
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
    return _react3.default.createElement(_antd.Alert, { message: '错误提示的文案',
      description: '错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍',
      type: 'error',
      closable: true,
      onClose: this.onClose });
  }
}));

DragableTextArea.propTypes = {
  addTodo: _react2.PropTypes.func.isRequired
};

exports.default = DragableTextArea;

module.exports = exports['default'];