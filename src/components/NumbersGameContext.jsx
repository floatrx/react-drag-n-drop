import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default function NumbersGameContext(props) {
  return <DragDropContext onDragEnd={props.onDragEnd}>{props.children}</DragDropContext>;
}
