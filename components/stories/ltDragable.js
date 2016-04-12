import React from 'react';
import DragableTextArea from '../DragableTextArea';
import DragableTextImage from '../DragableImage';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('ltDragable', module)
  .add('dragableTextArea', () => {
    return (
      <div className="todoapp">
        <DragableTextArea drag={action('Add Todo')}/>
        <div className="advanced-search-form">
        属性:
        </div>
      </div>
    );
  }).add('dragableTextImage', () => {
    return (
      <div className="todoapp">
        <DragableTextImage drag={action('Add Todo')}/>
      </div>
    );
  });
