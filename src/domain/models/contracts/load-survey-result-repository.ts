import { SurveyResultModel } from '@/domain/models/survey-result'

export const LOAD_SURVEY_RESULT_REPOSITORY = 'LOAD_SURVEY_RESULT_REPOSITORY'

export interface ILoadSurveyResultRepository {
  load: (surveyId: string, accountId: string) => Promise<ILoadSurveyResultRepository.Result>
}

export namespace ILoadSurveyResultRepository {
  export type Result = SurveyResultModel
}
