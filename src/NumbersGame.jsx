import React from 'react';
import NumbersGameContext from './components/NumbersGameContext';
import VerticalColumn from './components/VerticalColumn';

import './NumbersGame.css';
import Heading from './components/Heading';

const initialData = {
  isCompleted: false,
  column: {
    id: 'column-1',
    numberIds: ['seven', 'four', 'one', 'five', 'three', 'two', 'six'],
  },
  numbers: {
    five: { id: 'five', content: '5' },
    four: { id: 'four', content: '4' },
    one: { id: 'one', content: '1' },
    three: { id: 'three', content: '3' },
    two: { id: 'two', content: '2' },
    six: { id: 'six', content: '6' },
    seven: { id: 'seven', content: '7' },
  },
};

export default class NumbersGame extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = { ...initialData };
  }
  checkResults(numbers) {
    const isSortedAsc = (() => {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] <= numbers[i]) return;
      }
      return true;
    })();

    const sound = `/assets/${isSortedAsc ? 'finish' : 'move'}.mp3`;
    new Audio(sound).play();
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const { column } = this.state;
    const numberIds = Array.from(column.numberIds);

    // Switch items
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);

    const numbers = numberIds.map((numberId) => parseInt(this.state.numbers[numberId].content, 10));

    // Update state
    this.setState({ column: { ...column, numberIds } });
    this.checkResults(numbers);
  }

  render() {
    const numbers = this.state.column.numberIds.map((numberId) => this.state.numbers[numberId]);

    return (
      <NumbersGameContext onDragEnd={this.onDragEnd}>
        <Heading />
        <VerticalColumn column={this.state.column} items={numbers} />
      </NumbersGameContext>
    );
  }
}
