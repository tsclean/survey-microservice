import { AddSurveyParams, SurveyModel } from '@/domain/models/survey'
import { SurveyModelSchema as Model } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/survey'
import { IAddSurveyRepository } from '@/domain/models/contracts/add-survey-repository'
import { ILoadSurveysRepository } from '@/domain/models/contracts/load-surveys-repository'

export class SurveyMongooseRepositoryAdapter implements IAddSurveyRepository, ILoadSurveysRepository {
  async save (data: AddSurveyParams): Promise<void> {
    await Model.create(data)
  }

  async load (accountId: string): Promise<ILoadSurveysRepository.Result> {
    return Model.findById<SurveyModel[]>(accountId)
  }
}
