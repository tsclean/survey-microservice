import { SurveyResultModel } from '@/domain/models/survey-result'

export const LOAD_SURVEY_RESULT_SERVICE = 'LOAD_SURVEY_RESULT_SERVICE'

export interface ILoadSurveyResultService {
  load: (surveyId: string, accountId: string) => Promise<ILoadSurveyResultService.Result>
}

export namespace ILoadSurveyResultService {
  export type Result = SurveyResultModel
}
