import React, { Component } from 'react';
import { SurveyChoice } from '../types';

interface Props extends SurveyChoice {
  next: (choiceID: string) => void
}

export default class Choice extends Component<Props> {
  render() {
    const { text, next, id } = this.props;

    return <div className="choice">
            <button onClick={() => next(id)}>{text}</button>
          </div>;
  }
}
