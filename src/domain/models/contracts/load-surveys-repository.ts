import { SurveyModel } from '@/domain/models/survey'

export const LOAD_SURVEYS_REPOSITORY = 'LOAD_SURVEYS_REPOSITORY'

export interface ILoadSurveysRepository {
  load: (accountId: string) => Promise<ILoadSurveysRepository.Result>
}

export namespace ILoadSurveysRepository {
  export type Result = SurveyModel[]
}
