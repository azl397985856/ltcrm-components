'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'components/DragableImage/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'components/DragableImage/index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var DragableImage = _wrapComponent('_component')(_react3.default.createClass({
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
    return _react3.default.createElement(
      _antd.Form,
      { horizontal: true, style: { margin: 20, width: '80%', height: '80%' } },
      _react3.default.createElement(
        _antd.Row,
        null,
        _react3.default.createElement(
          _antd.Col,
          null,
          _react3.default.createElement(_antd.Input, { placeholder: 'ooooooooooooooo', type: 'textarea', rows: '5', value: this.state.failureReason, onChange: this.onChange })
        )
      ),
      _react3.default.createElement(
        _antd.Row,
        { style: { marginTop: 10 } },
        _react3.default.createElement(
          _antd.Col,
          { offset: '22' },
          _react3.default.createElement(
            _antd.Button,
            { type: 'primary', disabled: this.state.failureReason === '', onClick: this.handleSubmit },
            '确定'
          )
        )
      )
    );
  }
}));

DragableImage.propTypes = {
  addTodo: _react2.PropTypes.func.isRequired
};

exports.default = DragableImage;

module.exports = exports['default'];