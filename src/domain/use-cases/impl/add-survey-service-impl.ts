import { Adapter, Service } from '@tsclean/core'
import { IAddSurveyService } from '@/domain/use-cases/add-survey-service'
import { AddSurveyParams } from '@/domain/models/survey'
import {
  ADD_SURVEY_REPOSITORY,
  IAddSurveyRepository
} from '@/domain/models/contracts/add-survey-repository'

@Service()
export class AddSurveyServiceImpl implements IAddSurveyService {
  constructor (
    @Adapter(ADD_SURVEY_REPOSITORY)
    private readonly addSurveyRepository: IAddSurveyRepository
  ) {}

  async save (data: AddSurveyParams): Promise<void> {
    await this.addSurveyRepository.save(data)
  }
}
