import React, { Component } from 'react';
import { SurveyQuestion, SurveyChoice } from '../util/types';
import Choice from '../choice';
import './index.css';

interface Props extends SurveyQuestion {
  next: (choiceID: string) => void,
  selectedChoice: string,
}
export default class Question extends Component<Props> {
  render() {
    const { text, choices, next, correctChoice } = this.props;
    const sortedChoices = this.getSortedChoices(choices);
    return <div className="question">
      <h3 className="question__text">{text}</h3>
      {sortedChoices.map((choice, idx) => 
        <Choice 
          key={idx}
          {...choice} 
          next={next}
          isCorrect={correctChoice.id === choice.id}
          isSelected={this.props.selectedChoice === choice.id}
          />
      )}
    </div>
  }

  private getSortedChoices = (choices: Array<SurveyChoice>) => {
    return Array.from(choices).sort((a, b) => a.position - b.position);
  }

}
