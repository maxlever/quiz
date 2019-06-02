import React, { Component } from 'react';
import { SurveyData, SurveyAnswer } from '../types';
import Question from '../question';
import End from '../end';
import { scoreSurvey } from './score';


type State = {
  questionIdx: number,
  answers: Array<SurveyAnswer>
}

class Survey extends Component<SurveyData, State> {
  constructor(props: SurveyData) {
    super(props);
    this.state = {
      questionIdx: 0,
      answers: [],
    }
  }

  next = (choiceID: string) => {
    this.setState((state, props) => ({
        questionIdx: state.questionIdx + 1, 
        answers: state.answers.concat([{
          choiceID,
          questionID: this.getQuestions(props)[state.questionIdx].id
        }]),
      }));
  }

  getScore = () => {
    const { answers } = this.state;
    const { questions } = this.props;
    return scoreSurvey(answers, questions);
  }

  render() {
    const { questionIdx: i } = this.state;
    const questions = this.getQuestions(this.props);

    return (
      <div className="App">
        {i < questions.length
          ? <Question {...questions[i]} next={this.next} />
          : <End score={this.getScore()} max={questions.length} />
        }
        
      </div>
    );
  }

  private getQuestions(props: SurveyData) {
    const { questions } = props;
    return Object.values(questions).sort((a, b) => a.position - b.position);
  }
}

export default Survey;

