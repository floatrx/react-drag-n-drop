import React from 'react';
import DraggableItemWrapper from './DraggableItemWrapper';

export default (props) => {
  const className = `dnd-number size-${props.value}`;

  return (
    <DraggableItemWrapper
      draggableId={props.value}
      index={props.itemPosition}
      className={className}
    >
      <div>{props.content}</div>
    </DraggableItemWrapper>
  );
};
