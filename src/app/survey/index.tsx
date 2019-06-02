import React, { Component, Fragment } from 'react';
import { SurveyData, SurveyAnswers } from '../types';
import Question from '../question';
import End from '../end';
import { scoreSurvey } from './score';
import Button from '../button';


type State = {
  questionIdx: number,
  answers: SurveyAnswers
}

interface Props extends SurveyData {}

class Survey extends Component<Props, State> {
  state = {
    questionIdx: 0,
    answers: {},
  }

  next = (choiceID: string) => {
    this.setState((state, props) => {
      let newState: State = {
        questionIdx: state.questionIdx + 1, 
        answers: {
          ...state.answers, [this.getQuestions(props)[state.questionIdx].id]: choiceID
        }
      };
      return newState;
      });
  }

  getScore = () => {
    const { answers } = this.state;
    const { questions } = this.props;
    return scoreSurvey(answers, questions);
  }

  restart = () => {
    this.setState({ questionIdx: 0, answers: {} });
  }

  render() {
    const { questionIdx: i } = this.state;
    const questions = this.getQuestions(this.props);

    return (
      <div className="survey">
        {i < questions.length
          ? <Question {...questions[i]} next={this.next} />
          : <Fragment>
              <End score={this.getScore()} max={questions.length} />
              <Button onClick={this.restart}>restart?</Button>
            </Fragment>
        }
      </div>
    );
  }

  private getQuestions(props: Props) {
    const { questions } = props;
    return Array.from(questions).sort((a, b) => a.position - b.position);
  }
}

export default Survey;

