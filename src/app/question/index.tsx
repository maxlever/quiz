import React, { Component } from 'react';
import { SurveyQuestion, SurveyChoice } from '../util/types';
import Choice from '../choice';
import './index.css';
import { sortByPosition } from '../util';

interface Props extends SurveyQuestion {
  onSelect: (choiceID: string) => void,
  selectedChoice: string,
};

export default class Question extends Component<Props> {
  render() {
    const { text, choices, onSelect, correctChoice } = this.props;
    const sortedChoices = sortByPosition(choices);

    return (
      <div className="question">
        <h3 className="question__text">{text}</h3>
        {sortedChoices.map((choice, idx) => 
          <Choice 
            key={idx}
            {...choice} 
            onSelect={onSelect}
            isCorrect={correctChoice.id === choice.id}
            isSelected={this.props.selectedChoice === choice.id}
            />
        )}
      </div>
    );
  }

}
