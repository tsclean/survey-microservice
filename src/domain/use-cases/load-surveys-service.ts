import { SurveyModel } from '@/domain/models/survey'

export const LOAD_SURVEYS_SERVICE = 'LOAD_SURVEYS_SERVICE'

export interface ILoadSurveysService {
  load: (accountId: string) => Promise<ILoadSurveysService.Result>
}

export namespace ILoadSurveysService {
  export type Result = SurveyModel[]
}
