import React from 'react';
import {Table, Icon} from 'antd';
import DragableTextArea from '../DragableTextArea/index';
import DragableTextImage from '../DragableImage/index';
import { storiesOf, action } from '@kadira/storybook';

const columns = [{
  title: '参数',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '说明',
  dataIndex: 'desc',
  key: 'desc',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  }, {
  title: '默认值',
  dataIndex: 'default',
  key: 'default',
}];
const data = [{
  name: 'Text',
  desc: '设置显示的文本',
  type: 'String',
  default: ''
}, {
 name: 'Value',
  desc: '要设置表单的值',
  type: 'String',
  default: ''
}, {
  name: 'onChange',
  desc: '表单值改变的回调函数',
  type: 'func',
  default: ''
}];
storiesOf('ltDragable', module)
  .add('dragableTextArea', () => {
    return (
      <div className="container">
        <DragableTextArea drag={action('Add Todo')}/>
        <div className="box">
          <div className="title">API</div>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="title">注意：</div>
          <div className="info">So this part is just freakin' awesome. With React JS and the react-hot-loader you can change the class code of your component and see the instances update live in the DOM, without loosing their state! This is pretty much exactly how CSS updates behave, only that it is your components.</div>
        </div>
      </div>
    );
  }).add('dragableTextImage', () => {
    return (
      <div className="container">
        <DragableTextImage drag={action('Add Todo')}/>
         <div className="box">
          <div className="title">API</div>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
