import React from 'react';
import DraggableListItems from './DraggableListItems';
import DroppableWrapper from './DroppableWrapper';

export default (props) => (
  <DroppableWrapper droppableId={props.column.id} className="source">
    <DraggableListItems items={props.items} />
  </DroppableWrapper>
);
