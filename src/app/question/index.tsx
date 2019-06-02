import React, { Component } from 'react';
import { SurveyQuestion } from '../types';
import Choice from '../choice';

interface Props extends SurveyQuestion {
  next: (choiceID: string) => void
}
export default class Question extends Component<Props> {
  render() {
    const { text, answers: { choices }, next } = this.props;

    return <div>
      <h3>{text}</h3>
      {choices.map(choice => <Choice {...choice} next={next} />)}
    </div>
  }
}
