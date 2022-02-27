import { ISaveSurveyResultService } from '@/domain/use-cases/save-survey-result-service'
import { SurveyResultModelSchema as Model } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/survey-result'

export class SurveyResultMongooseRepositoryAdapter implements ISaveSurveyResultService {
  async save (data: ISaveSurveyResultService.Params): Promise<ISaveSurveyResultService.Result> {
    return Model.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true
    })
  }

  map (data: any): any {
    const { _id, ...rest } = data
    return { ...rest, id: _id.toString() }
  }
}
