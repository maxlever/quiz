export type SurveyData = {
  questions: SurveyQuestions
}

export type SurveyQuestions = Array<SurveyQuestion>

export type SurveyQuestion = {
  id: string,
  position: number,
  text: string,
  choices: Array<SurveyChoice>,
  correctChoice: { id: string }
}

export type SurveyChoice = {
  id: string,
  text: string,
  position: number,
}

export type SurveyAnswers = { [questionID: string]: string }

export type SurveyAnswer = {
  questionID: string,
  choiceID: string,
}

export type SiteSettings = {
  siteTitle: string
}