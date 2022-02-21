import { SurveyModel } from '@/domain/models/survey'

export const LOAD_SURVEY_BY_ID_REPOSITORY = 'LOAD_SURVEY_BY_ID_REPOSITORY'

export interface ILoadSurveyByIdRepository {
  loadById: (id: string) => Promise<ILoadSurveyByIdRepository.Result>
}

export namespace ILoadSurveyByIdRepository {
  export type Result = SurveyModel
}
