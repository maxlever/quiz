import React, { Component } from 'react';

type Props = {
  score: number,
  max: number
}

export default class End extends Component<Props> {
  render() {
    return (<div className="end">
      you answered {this.props.score} out of {this.props.max} questions correctly.
    </div>);
  }
}
