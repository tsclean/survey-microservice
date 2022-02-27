import { Adapter, Body, Mapping, Post } from '@tsclean/core'
import {
  ADD_SURVEY_SERVICE,
  IAddSurveyService
} from '@/domain/use-cases/add-survey-service'
import { AddSurveyParams } from '@/domain/models/survey'
import { IValidationsRepository, VALIDATIONS_REPOSITORY } from '@/domain/models/contracts/validations-repository'
import { badRequest, HttpResponse, noContent, serverError } from '@/infrastructure/entry-points/helpers/status-code'

@Mapping('api/v1/add-survey')
export class AddSurveyController {
  constructor (
    @Adapter(ADD_SURVEY_SERVICE)
    private readonly addSurveyService: IAddSurveyService,
    @Adapter(VALIDATIONS_REPOSITORY)
    private readonly validationsRepository: IValidationsRepository
  ) {
  }

  @Post()
  async addSurveyController (@Body() data: AddSurveyParams): Promise<HttpResponse> {
    try {
      const { question } = data
      for (const answer of data.answers) {
        const validation = await this.validationsRepository.validation({ question, ...answer })
        if (!validation?.isValid && validation?.errors) return badRequest(validation.errors)
      }

      await this.addSurveyService.save({ ...data, date: new Date().toString() })
      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
