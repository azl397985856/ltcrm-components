import React from 'react';
import DragableTextArea from '../DragableTextArea';
import DragableTextImage from '../DragableImage';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('ltDragable', module)
  .add('dragableTextArea', () => {
    return (
      <div className="container">
        <DragableTextArea drag={action('Add Todo')}/>
        <div className="box">
          <div className="title">属性:</div>
          <div className="code-interface">
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
          </div>
          <div className="title">方法:</div>
          <div className="code-interface">
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
          </div>
        </div>
      </div>
    );
  }).add('dragableTextImage', () => {
    return (
      <div className="container">
        <DragableTextImage drag={action('Add Todo')}/>
         <div className="box">
          <div className="title">属性:</div>
          <div className="code-interface">
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
           text:  balabalalalla<br/>
          </div>
          <div className="title">方法:</div>
          <div className="code-interface">
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
            onChange: xxxxx<br/>
            onClick: xxx<br/>
          </div>
        </div>
      </div>
    );
  });
