import React, { Component, Fragment } from 'react';
import { SurveyData, SurveyAnswers } from '../util/types';
import { sortByPosition } from '../util';
import Question from '../question';
import End from '../end';
import { scoreSurvey } from './score';
import './index.css';

type State = {
  questionIdx: number,
  answers: SurveyAnswers
  areAnswersShown: boolean
};

class Survey extends Component<SurveyData, State> {
  state: State = {
    questionIdx: 0,
    answers: {},
    areAnswersShown: false
  }

  private getScore() {
    const { answers } = this.state;
    const { questions } = this.props;
    return scoreSurvey(answers, questions);
  }

  private showAnswer(choiceID: string) {
    this.setState(({ answers: currAnswers, questionIdx: i }, { questions }) => {
      const question = sortByPosition(questions)[i];
      return {
        areAnswersShown: true,
        answers: { ...currAnswers, [question.id]: choiceID },
      };
    });
  }

  private showNextQuestion() {
    this.setState(state => ({
      questionIdx: state.questionIdx + 1,
      areAnswersShown: false,
    }));
  }

  private timeout = 0;
  private onSelectChoice = (choiceID: string) => {
    // can't change answer after correct is shown
    if (this.timeout !== 0) return;

    this.showAnswer(choiceID);
    this.timeout = window.setTimeout(() => {
      this.showNextQuestion();
      this.timeout = 0;
    }, 1000);
  }

  private restart = () => {
    this.setState({ questionIdx: 0, answers: {} });
  }

  render() {
    const { questionIdx: i, answers } = this.state;
    const questions = sortByPosition(this.props.questions);
    const isNotDone = i < questions.length;
    const classes = "survey" + (this.state.areAnswersShown ? " show-answer" : "");

    return (
      <div className={classes}>
        {isNotDone
          ? <Question
            {...questions[i]}
            onSelect={this.onSelectChoice}
            selectedChoice={answers[questions[i].id]}
          />
          : <End
            score={this.getScore()}
            max={questions.length}
            onRestart={this.restart}
          />
        }
      </div>
    );
  }
}

export default Survey;

