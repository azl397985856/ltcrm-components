'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DragableTextArea = require('../DragableTextArea');

var _DragableTextArea2 = _interopRequireDefault(_DragableTextArea);

var _DragableImage = require('../DragableImage');

var _DragableImage2 = _interopRequireDefault(_DragableImage);

var _storybook = require('@kadira/storybook');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ltDragable', module).add('dragableTextArea', function () {
  return _react2.default.createElement(
    'div',
    { className: 'todoapp' },
    _react2.default.createElement(_DragableTextArea2.default, { drag: (0, _storybook.action)('Add Todo') }),
    _react2.default.createElement(
      'div',
      { className: 'advanced-search-form' },
      '属性:'
    )
  );
}).add('dragableTextImage', function () {
  return _react2.default.createElement(
    'div',
    { className: 'todoapp' },
    _react2.default.createElement(_DragableImage2.default, { drag: (0, _storybook.action)('Add Todo') })
  );
});