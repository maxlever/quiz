import React, { Component } from 'react';
import { SurveyQuestion, SurveyChoice } from '../types';
import Choice from '../choice';
import './index.css';

interface Props extends SurveyQuestion {
  next: (choiceID: string) => void
}
export default class Question extends Component<Props> {
  state = {
    selectedChoice: null
  }
  
  render() {
    const { text, choices, next, correctChoice } = this.props;
    const sortedChoices = this.getSortedChoices(choices);
    return <div className="question">
      <h3 className="question__title">{text}</h3>
      {sortedChoices.map((choice, idx) => 
        <Choice 
          key={idx}
          {...choice} 
          next={id => { this.setState({ selectedChoice: id }); next(id); }}
          isCorrect={correctChoice.id === choice.id}
          isSelected={this.state.selectedChoice === choice.id}
          />
      )}
    </div>
  }

  private getSortedChoices = (choices: Array<SurveyChoice>) => {
    return Array.from(choices).sort((a, b) => a.position - b.position);
  }

}
