import { Adapter, Mapping, Post } from '@tsclean/core'
import {
  ADD_SURVEY_SERVICE,
  IAddSurveyService
} from '@/domain/use-cases/add-survey-service'
import { AddSurveyParams } from '@/domain/models/survey'

@Mapping('api/v1/add-survey')
export class AddSurveyController {
  constructor (
    @Adapter(ADD_SURVEY_SERVICE)
    private readonly addSurveyService: IAddSurveyService
  ) {}

  @Post()
  async addSurveyController (data: AddSurveyParams): Promise<void> {
    await this.addSurveyService.save({ ...data, date: new Date().toString() })
  }
}
