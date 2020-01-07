import React from 'react';
import NumberBox from './NumberBox';

export default (props) => <div> {props.items.map(toNumberBox)} </div>;

function toNumberBox(item, position) {
  return (
    <NumberBox
      key={item.id}
      className="box"
      itemPosition={position}
      value={item.id}
      content={item.content}
    />
  );
}
