import React, { Component } from 'react';
import './index.css';
import Button from '../button';

type Props = {
  score: number,
  max: number,
  onRestart: () => void,
};

export default class End extends Component<Props> {
  render() {
    const { score, max, onRestart } = this.props;

    return (
      <div className="end">
        <h3 className="end__text">
          You answered {score} out of {max} questions correctly.
        </h3>
        <Button onClick={onRestart}>restart?</Button>
      </div>
    );
  }
}
