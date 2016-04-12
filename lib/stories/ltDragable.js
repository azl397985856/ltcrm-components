'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../DragableTextArea/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../DragableImage/index');

var _index4 = _interopRequireDefault(_index3);

var _storybook = require('@kadira/storybook');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('ltDragable', module).add('dragableTextArea', function () {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_index2.default, { drag: (0, _storybook.action)('Add Todo') }),
    _react2.default.createElement(
      'div',
      { className: 'box' },
      _react2.default.createElement(
        'div',
        { className: 'title' },
        '属性:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'code-interface' },
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'title' },
        '方法:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'code-interface' },
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null)
      )
    )
  );
}).add('dragableTextImage', function () {
  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(_index4.default, { drag: (0, _storybook.action)('Add Todo') }),
    _react2.default.createElement(
      'div',
      { className: 'box' },
      _react2.default.createElement(
        'div',
        { className: 'title' },
        '属性:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'code-interface' },
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null),
        'text:  balabalalalla',
        _react2.default.createElement('br', null)
      ),
      _react2.default.createElement(
        'div',
        { className: 'title' },
        '方法:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'code-interface' },
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null),
        'onChange: xxxxx',
        _react2.default.createElement('br', null),
        'onClick: xxx',
        _react2.default.createElement('br', null)
      )
    )
  );
});