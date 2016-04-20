'use strict';

var _index = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _reactDom = require('react-dom');

var _antd = require('antd');

var _index7 = require('../ImgZoom/index.js');

var _index8 = _interopRequireDefault(_index7);

var _storybook = require('@kadira/storybook');

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _mixin = require('../../utils/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {},
  _component2: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'components/stories/imgZoom.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'components/stories/imgZoom.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var CheckboxGroup = _antd.Checkbox.Group;
var FormItem = _antd.Form.Item;

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
  name: 'data',
  desc: '传入的对象数组。格式：[{title: \'\', thumbnail: \'./img1.png\', img: \'./img_big.png\', link: \'.http://www.800best.com\'}]',
  type: 'Array',
  default: '[]'
}, {
  name: 'duration',
  desc: '单位秒',
  type: '整数',
  default: '15 * 24 * 3600'
}, {
  name: 'sortFunc',
  desc: '自定义处理函数，用户可以传入自定的函数用于指定list的排序方式',
  type: 'func',
  default: ''
}, {
  name: 'titleVisible',
  desc: '控制title是否显示 true为显示，false为不显示',
  type: 'boolean',
  default: 'true'
}];
var defaultData = [{
  title: '淘宝',
  thumbnail: 'taobao.ico',
  image: 'taobao.jpg',
  link: 'http://www.taobao.com'
}, {
  title: '京东',
  thumbnail: 'jd.ico',
  image: 'jd.png',
  link: 'http://www.jd.com'
}, {
  title: '1号店',
  thumbnail: 'yhd.jpg',
  image: 'yhd.png',
  link: 'http://www.yhd.com'
}, {
  title: '折800',
  thumbnail: 'zhe800_ico.png',
  image: 'zhe800.png',
  link: 'http://zhe800.com'
}, {
  title: '微店',
  thumbnail: 'weidian_ico.png',
  image: 'weidian.png',
  link: 'http://www.weidian.com'
}, {
  title: '蘑菇街',
  thumbnail: 'mogujie.ico',
  image: 'mogujie.png',
  link: 'http://www.mugujie.com'
}];
var Component = _wrapComponent('_component')(_react3.default.createClass({
  displayName: 'Component',
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
    return _react3.default.createElement(_index8.default, { style: { margin: 200 }, data: this.props.data || defaultData, duration: this.props.duration, titleVisible: this.props.titleVisible, onClick: (0, _storybook.action)('click the button') });
  }
}));
var Sample = _wrapComponent('_component2')(_react3.default.createClass({
  displayName: 'Sample',
  getInitialState: function getInitialState() {
    return {};
  },
  onTitleVisibleChange: function onTitleVisibleChange(e) {
    this.setState({
      titleVisible: e.target.checked
    });
  },
  onDataChange: function onDataChange(e) {
    this.setState({
      data: e.target.value
    });
  },
  onDurationBlur: function onDurationBlur() {
    var duration = this.state.duration || 15;
    _antd.message.success('cookie will be expired after ' + duration + ' days', 3);
  },
  onDurationChange: function onDurationChange(e) {
    this.setState({
      duration: e.target.value
    });
  },
  render: function render() {
    return _react3.default.createElement(
      _antd.Form,
      { horizontal: true, className: 'advanced-search-form' },
      _react3.default.createElement(Component, { titleVisible: this.state.titleVisible, data: this.state.data, duration: this.state.duration }),
      _react3.default.createElement(
        _antd.Row,
        { style: { margin: 10 } },
        _react3.default.createElement(
          _antd.Col,
          { span: '12' },
          _react3.default.createElement(
            FormItem,
            {
              label: 'duration: ',
              labelCol: { span: 6 },
              wrapperCol: { span: 14 } },
            _react3.default.createElement(_antd.Input, { max: 1000000, placeholder: 'plz input duration of the cooike', value: this.state.duration, onBlur: this.onDurationBlur, onChange: this.onDurationChange })
          )
        ),
        _react3.default.createElement(
          _antd.Col,
          { span: '8' },
          _react3.default.createElement(
            FormItem,
            {
              label: 'titleVisible: ',
              labelCol: { span: 10 },
              wrapperCol: { span: 14 } },
            _react3.default.createElement(_antd.Checkbox, { value: this.state.titleVisible, onChange: this.onTitleVisibleChange })
          )
        )
      )
    );
  }
}));

(0, _storybook.storiesOf)('imgZoom', module).add('imgZoom', function () {
  return _react3.default.createElement(
    'div',
    { className: 'lt-com-container' },
    _react3.default.createElement(
      'h2',
      { style: { textAlign: 'center', marginBottom: 15, color: '#4078c0' } },
      'imgZoom'
    ),
    '默认取列表(data)第一个作为大图展示，组件会记住排序的结果（默认时间是15天）。',
    _react3.default.createElement('br', null),
    _react3.default.createElement('br', null),
    _react3.default.createElement(
      'div',
      { className: 'lt-com-box' },
      _react3.default.createElement(
        'span',
        { className: 'lt-com-title' },
        'Code Lab'
      ),
      _react3.default.createElement('div', { id: 'codeLab' }),
      _react3.default.createElement(Sample, null)
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
        ' <ImgZoom style={{margin: 200}} data = {this.props.data || defaultData} duration={this.props.duration} titleVisible={this.props.titleVisible}/>',
        _react3.default.createElement('br', null)
      )
    ),
    _react3.default.createElement(
      'div',
      { className: 'lt-com-box' },
      _react3.default.createElement(
        'span',
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