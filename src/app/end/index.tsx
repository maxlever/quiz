import React, { Component } from 'react';
import './index.css';

type Props = {
  score: number,
  max: number
}

export default class End extends Component<Props> {
  render() {
    const { score, max } = this.props;
    return (<div className="end">
      <h3 className="end__text">
        You answered {score} out of {max} questions correctly.
      </h3>
    </div>);
  }
}