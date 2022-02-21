import { SurveyModel } from '@/domain/models/survey'

export const LOAD_SURVEY_BY_ID_SERVICE = 'LOAD_SURVEY_BY_ID_SERVICE'

export interface ILoadSurveyByIdService {
  loadById: (id: string) => Promise<ILoadSurveyByIdService.Result>
}

export namespace ILoadSurveyByIdService {
  export type Result = SurveyModel
}
