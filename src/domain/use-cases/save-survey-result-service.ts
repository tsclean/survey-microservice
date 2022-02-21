import { ISaveSurveyResultRepository } from '@/domain/models/contracts/save-survey-result-repository'

export interface ISaveSurveyResultService {
  save: (data: ISaveSurveyResultService.Params) => Promise<ISaveSurveyResultService.Result>
}

export namespace ISaveSurveyResultService {
  export type Params = ISaveSurveyResultRepository.Params
  export type Result = ISaveSurveyResultRepository.Result
}
