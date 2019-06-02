export type SurveyData = {
  questions: SurveyQuestions
}

export type SurveyQuestions = { [k: string]: SurveyQuestion }

export type SurveyQuestion = {
  id: string,
  position: number,
  text: string,
  answers: {
    choices: Array<SurveyChoice>,
    correct: string
  }
}

export type SurveyChoice = {
  id: string,
  text: string,
  position: number,
}

export type SurveyAnswer = {
  questionID: string,
  choiceID: string,
}