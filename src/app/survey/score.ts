import { SurveyQuestions, SurveyAnswers } from '../types';

export function scoreSurvey(answers: SurveyAnswers, questions: SurveyQuestions) {
  return questions.filter(question => 
    question.correctChoice.id === answers[question.id]
  ).length;
}
