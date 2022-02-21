import { SurveyResultModel } from '@/domain/models/survey-result'

export const SAVE_SURVEY_RESULT_REPOSITORY = 'SAVE_SURVEY_RESULT_REPOSITORY'

export interface ISaveSurveyResultRepository {
  save: (data: ISaveSurveyResultRepository.Params) => Promise<ISaveSurveyResultRepository.Result>
}

export namespace ISaveSurveyResultRepository {
  export type Params = {
    surveyId: string
    accountId: string
    answer: string
    data: Date
  }

  export type Result = SurveyResultModel
}
