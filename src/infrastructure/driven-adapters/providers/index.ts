import { ADD_SURVEY_REPOSITORY } from '@/domain/models/contracts/add-survey-repository'
import { ADD_SURVEY_SERVICE } from '@/domain/use-cases/add-survey-service'
import { AddSurveyServiceImpl } from '@/domain/use-cases/impl/add-survey-service-impl'
import { SurveyMongooseRepositoryAdapter } from '../adapters'

export const adapters = [{
  provide: ADD_SURVEY_REPOSITORY,
  useClass: SurveyMongooseRepositoryAdapter
}]

export const services = [{
  provide: ADD_SURVEY_SERVICE,
  useClass: AddSurveyServiceImpl
}]
