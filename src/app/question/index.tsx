import React, { Component } from 'react';
import { SurveyQuestion, SurveyChoice } from '../types';
import Choice from '../choice';

interface Props extends SurveyQuestion {
  next: (choiceID: string) => void
}
export default class Question extends Component<Props> {
  render() {
    const { text, choices, next } = this.props;
    const sortedChoices = this.getSortedChoices(choices);
    return <div>
      <h3>{text}</h3>
      {sortedChoices.map((choice, idx) => <Choice key={idx} {...choice} next={next} />)}
    </div>
  }

  private getSortedChoices = (choices: Array<SurveyChoice>) => {
    return Array.from(choices).sort((a, b) => a.position - b.position);
  }

}
