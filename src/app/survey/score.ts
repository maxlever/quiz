import { SurveyAnswer, SurveyQuestions } from '../types';

export function scoreSurvey(answers: SurveyAnswer[], questions: SurveyQuestions) {
  return answers.filter(answer => {
    return answer.choiceID === (questions[answer.questionID].answers.correct);
  }).length;
}
