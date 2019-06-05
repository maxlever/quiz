import React, { Component } from 'react';
import { SurveyChoice } from '../types';
import Button from '../button';

interface Props extends SurveyChoice {
  next: (choiceID: string) => void,
  isCorrect: boolean,
  isSelected: boolean,
}

export default class Choice extends Component<Props> {
  render() {
    const { text, next, id, isCorrect, isSelected } = this.props;
    const classes = isCorrect ? "correct" : isSelected ? "selected" : "";
    return (<div className="choice">
              <Button 
                onClick={() => next(id)}
                classes={classes}
              >
                {text}
              </Button>
            </div>);
  }
}
