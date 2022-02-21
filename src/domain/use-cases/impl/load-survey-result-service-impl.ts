import { Adapter, Service } from '@tsclean/core'
import { ILoadSurveyResultService } from '@/domain/use-cases/load-survey-result-service'
import {
  ILoadSurveyByIdRepository,
  LOAD_SURVEY_BY_ID_REPOSITORY
} from '@/domain/models/contracts/load-survey-by-id-repository'
import {
  ILoadSurveyResultRepository,
  LOAD_SURVEY_RESULT_REPOSITORY
} from '@/domain/models/contracts/load-survey-result-repository'
import { SurveyModel } from '@/domain/models/survey'
import { SurveyResultModel } from '@/domain/models/survey-result'

@Service()
export class LoadSurveyResultServiceImpl implements ILoadSurveyResultService {
  constructor (
    @Adapter(LOAD_SURVEY_BY_ID_REPOSITORY)
    private readonly loadSurveyByIdRepository: ILoadSurveyByIdRepository,
    @Adapter(LOAD_SURVEY_RESULT_REPOSITORY)
    private readonly loadSurveyResultRepository: ILoadSurveyResultRepository
  ) {
  }

  async load (surveyId: string, accountId: string): Promise<ILoadSurveyResultService.Result> {
    let surveyResult = await this.loadSurveyResultRepository.load(surveyId, accountId)
    if (!surveyResult) {
      const survey = await this.loadSurveyByIdRepository.loadById(surveyId)
      surveyResult = this.makeEmptyResult(survey)
    }

    return surveyResult
  }

  protected makeEmptyResult (survey: SurveyModel): SurveyResultModel {
    return {
      surveyId: survey.id,
      question: survey.question,
      date: survey.date,
      answers: survey.answers.map((answer) => ({
        ...answer,
        count: 0,
        percent: 0,
        isCurrentAccountAnswer: false
      }))
    }
  }
}
