import React, { PropTypes, Component } from 'react';
import { Alert} from 'antd';

const DragableTextArea = React.createClass({
  getInitialState(props) {
    return {
      visible: true,
    } 
  },
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  },
  onClose(e) {
   this.handleSave('ee');
  },
  render() {
    return (
           <Alert message="错误提示的文案"
            description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
            type="error"
            closable
            onClose={this.onClose} />
    )
  }
});

DragableTextArea.propTypes = {
}

export default DragableTextArea;
module.exports = exports['default'];
