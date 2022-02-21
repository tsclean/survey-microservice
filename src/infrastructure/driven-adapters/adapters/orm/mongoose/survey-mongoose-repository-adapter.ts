import { AddSurveyParams, SurveyModel } from '@/domain/models/survey'
import { SurveyModelSchema as Model } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/survey'
import { IAddSurveyRepository } from '@/domain/models/contracts/add-survey-repository'
import { ILoadSurveysRepository } from '@/domain/models/contracts/load-surveys-repository'
import { ILoadSurveyByIdRepository } from '@/domain/models/contracts/load-survey-by-id-repository'

export class SurveyMongooseRepositoryAdapter implements IAddSurveyRepository,
  ILoadSurveysRepository, ILoadSurveyByIdRepository {
  async save (data: AddSurveyParams): Promise<void> {
    await Model.create(data)
  }

  async load (accountId: string): Promise<ILoadSurveysRepository.Result> {
    return Model.findById<SurveyModel[]>(accountId)
  }

  async loadById (id: string): Promise<ILoadSurveyByIdRepository.Result> {
    const survey = Model.findById(id)
    return survey && this.map(survey)
  }

  map (data: any): any {
    const { _id, ...rest } = data
    return { ...rest, id: _id.toString() }
  }
}
