import React from 'react';
import {Col} from 'antd';
import Checkbox from 'rc-checkbox';

const CheckboxGroup = React.createClass({
  getDefaultProps() {
    return {
      prefixCls: 'ant-checkbox',
      options: [],
      defaultValue: [],
      onChange() {},
      span: 4,
    };
  },
  propTypes: {
    defaultValue: React.PropTypes.array,
    value: React.PropTypes.array,
    options: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    span: React.PropTypes.string,
  },
  getInitialState() {
    const props = this.props;
    let value;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }
    return { value };
  },
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  },
  toggleOption(option) {
    const optionIndex = this.state.value.indexOf(option);
    const value = [...this.state.value];
    if (optionIndex === - 1) {
      value.push(option);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value);
  },
  render() {
    const options = this.props.options;
    const span = this.props.span;
    return (
      <div className="ant-checkbox-group col-24">
        {
          options.map(option =>
            <Col span= {span}>
              <label className="ant-checkbox-group-item" key={option}>
                <Checkbox disabled={this.props.disabled} {...this.props}
                  checked={this.state.value.indexOf(option) !== -1}
                  onChange={this.toggleOption.bind(this, option)} />
                {option}
              </label>
            </Col>
          )
        }
      </div>
    );
  },
});
export default CheckboxGroup;
module.exports = exports['default'];
