export type SurveyResultModel = {
  accountId?: string
  surveyId: string
  question: string
  answers: SurveyResultAnswerModel[]
  date: string
}

export type SurveyResultAnswerModel = {
  image?: string
  answer: string
  count: number
  percent: number
  isCurrentAccountAnswer: boolean
}

export type AddSurveyResultParams = Omit<SurveyResultModel, 'id'>
