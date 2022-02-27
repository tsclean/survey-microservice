export const LOAD_ANSWERS_BY_SURVEY_REPOSITORY = 'LOAD_ANSWERS_BY_SURVEY_REPOSITORY'

export interface ILoadAnswersBySurveyRepository {
  loadAnswers: (id: string) => Promise<ILoadAnswersBySurveyRepository.Result>
}

export namespace ILoadAnswersBySurveyRepository {
  export type Result = string[]
}
