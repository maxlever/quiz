import React, { Component } from 'react';
import { SurveyChoice } from '../types';
import Button from '../button';

interface Props extends SurveyChoice {
  next: (choiceID: string) => void
}

export default class Choice extends Component<Props> {
  render() {
    const { text, next, id } = this.props;

    return <div className="choice">
            <Button onClick={() => next(id)}>{text}</Button>
          </div>;
  }
}
