import { ADD_SURVEY_REPOSITORY } from '@/domain/models/contracts/add-survey-repository'
import { ADD_SURVEY_SERVICE } from '@/domain/use-cases/add-survey-service'
import { AddSurveyServiceImpl } from '@/domain/use-cases/impl/add-survey-service-impl'
import { SurveyMongooseRepositoryAdapter } from '../adapters'
import { VALIDATIONS_REPOSITORY } from '@/domain/models/contracts/validations-repository'
import { ValidatorAdapter } from '@/infrastructure/driven-adapters/adapters/validator-adapter'

export const adapters = [
  {
    provide: ADD_SURVEY_REPOSITORY,
    useClass: SurveyMongooseRepositoryAdapter
  },
  {
    provide: VALIDATIONS_REPOSITORY,
    useClass: ValidatorAdapter
  }
]

export const services = [{
  provide: ADD_SURVEY_SERVICE,
  useClass: AddSurveyServiceImpl
}]
