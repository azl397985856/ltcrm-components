import React, { PropTypes, Component } from 'react';
import { Modal, Row, Col, Input, Button, Validation, Form} from 'antd';

const DragableImage = React.createClass({
  getInitialState() {
     return {
        visible: true
     }
  },
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  },
  onChange(e) {
    this.setState({
      failureReason: e.target.value
    });
  },
  render() {
    return (
            <Form horizontal style={{margin: 20, width: '80%', height: '80%'}}>
              <Row>
                <Col>
                  <Input placeholder= "ooooooooooooooo" type="textarea" rows="5" value={this.state.failureReason} onChange={this.onChange}/>
                </Col>
              </Row>
              <Row style={{marginTop: 10}}>
                <Col offset="22">
                  <Button type="primary" disabled={this.state.failureReason === ''} onClick={this.handleSubmit}>确定</Button>
                </Col>
              </Row>
          </Form>
    )
  }
});

DragableImage.propTypes = {
}

export default DragableImage;
module.exports = exports['default'];
