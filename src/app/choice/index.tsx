import React, { Component } from 'react';
import { SurveyChoice } from '../util/types';
import Button from '../button';
import './index.css';

interface Props extends SurveyChoice {
  onSelect: (choiceID: string) => void,
  isCorrect: boolean,
  isSelected: boolean,
}

export default class Choice extends Component<Props> {
  render() {
    const { text, onSelect: next, id, isCorrect, isSelected } = this.props;
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
