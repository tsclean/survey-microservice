import { AddSurveyParams, SurveyModel } from '@/domain/models/survey'
import { SurveyModelSchema as Model } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/survey'
import { IAddSurveyRepository } from '@/domain/models/contracts/add-survey-repository'
import { ILoadSurveysRepository } from '@/domain/models/contracts/load-surveys-repository'
import { ILoadSurveyByIdRepository } from '@/domain/models/contracts/load-survey-by-id-repository'
import { ILoadAnswersBySurveyRepository } from '@/domain/models/contracts/load-answers-by-survey-repository'
import { QueryBuilder } from '@/infrastructure/driven-adapters/adapters/orm/helpers/query-builder'

export class SurveyMongooseRepositoryAdapter implements IAddSurveyRepository,
  ILoadSurveysRepository, ILoadSurveyByIdRepository, ILoadAnswersBySurveyRepository {
  async save (data: AddSurveyParams): Promise<void> {
    const survey = await Model.create(data)
    console.log(survey)
  }

  async load (accountId: string): Promise<ILoadSurveysRepository.Result> {
    return Model.findById<SurveyModel[]>(accountId)
  }

  async loadById (id: string): Promise<ILoadSurveyByIdRepository.Result> {
    return Model.findById(id)
    // return survey && this.map(survey)
  }

  map (data: any): any {
    const { _id, ...rest } = data
    return { ...rest, id: _id }
  }

  async loadAnswers (id: string): Promise<ILoadAnswersBySurveyRepository.Result> {
    const query = new QueryBuilder()
      // .match({
      //   _id: id
      // })
      // .project({
      //   _id: 0,
      //   answers: '$answers.answer'
      // })
      .unwind({ path: '$surveyResults' })
      .build()

    console.log('Query', query)
    //
    // const surveys = await Model.aggregate()
    // console.log("Surveys", surveys)
    // return

    const surveyCollection = await Model.aggregate([
      // { $match: { _id: id } },
      // { $project: { _id: 0, answers: '$answers.answer' } },
      { $unwind: '$answers' }
    ])

    console.log(surveyCollection)

    return surveyCollection[0]?.answers || []
  }
}
