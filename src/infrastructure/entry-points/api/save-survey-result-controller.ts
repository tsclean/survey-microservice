import { Mapping, Body, Adapter, Put, Param } from '@tsclean/core'
import { HttpResponse, noContent } from '@/infrastructure/entry-points/helpers/status-code'
import {
  ILoadAnswersBySurveyRepository,
  LOAD_ANSWERS_BY_SURVEY_REPOSITORY
} from '@/domain/models/contracts/load-answers-by-survey-repository'

@Mapping('api/v1/survey/result')
export class SaveSurveyResultController {
  constructor (
    @Adapter(LOAD_ANSWERS_BY_SURVEY_REPOSITORY)
    private readonly loadAnswersBySurveyRepository: ILoadAnswersBySurveyRepository
  ) {
  }

  @Put(':surveyId')
  async saveSurveyResultController (@Body() data: SaveSurveyResultController.Request, @Param() surveyId: string): Promise<HttpResponse> {
    return noContent()
  }
}

export namespace SaveSurveyResultController {
  export type Request = {
    surveyId: string
    answer: string
    accountId: string
  }
}
