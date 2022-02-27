import { ADD_SURVEY_REPOSITORY } from '@/domain/models/contracts/add-survey-repository'
import { ADD_SURVEY_SERVICE } from '@/domain/use-cases/add-survey-service'
import { AddSurveyServiceImpl } from '@/domain/use-cases/impl/add-survey-service-impl'
import { SurveyMongooseRepositoryAdapter } from '../adapters'
import { VALIDATIONS_REPOSITORY } from '@/domain/models/contracts/validations-repository'
import { ValidatorAdapter } from '@/infrastructure/driven-adapters/adapters/validator-adapter'
import { LOAD_SURVEY_BY_ID_SERVICE } from '@/domain/use-cases/load-survey-by-id-service'
import { LOAD_SURVEYS_REPOSITORY } from '@/domain/models/contracts/load-surveys-repository'
import { LoadSurveyByIdServiceImpl } from '@/domain/use-cases/impl/load-survey-by-id-service-impl'
import { LOAD_SURVEYS_SERVICE } from '@/domain/use-cases/load-surveys-service'
import { LoadSurveysServiceImpl } from '@/domain/use-cases/impl/load-surveys-service-impl'
import { SAVE_SURVEY_RESULT_REPOSITORY } from '@/domain/models/contracts/save-survey-result-repository'
import {
  SurveyResultMongooseRepositoryAdapter
} from '@/infrastructure/driven-adapters/adapters/orm/mongoose/survey-result-mongoose-repository-adapter'
import { LOAD_ANSWERS_BY_SURVEY_REPOSITORY } from '@/domain/models/contracts/load-answers-by-survey-repository'

export const adapters = [
  {
    provide: ADD_SURVEY_REPOSITORY,
    useClass: SurveyMongooseRepositoryAdapter
  },
  {
    provide: VALIDATIONS_REPOSITORY,
    useClass: ValidatorAdapter
  },
  {
    provide: LOAD_SURVEY_BY_ID_SERVICE,
    useClass: SurveyMongooseRepositoryAdapter
  },
  {
    provide: LOAD_SURVEYS_REPOSITORY,
    useClass: SurveyMongooseRepositoryAdapter
  },
  {
    provide: SAVE_SURVEY_RESULT_REPOSITORY,
    useClass: SurveyResultMongooseRepositoryAdapter
  },
  {
    provide: LOAD_ANSWERS_BY_SURVEY_REPOSITORY,
    useClass: SurveyMongooseRepositoryAdapter
  }
]

export const services = [
  {
    provide: ADD_SURVEY_SERVICE,
    useClass: AddSurveyServiceImpl
  },
  {
    provide: LOAD_SURVEY_BY_ID_SERVICE,
    useClass: LoadSurveyByIdServiceImpl
  },
  {
    provide: LOAD_SURVEYS_SERVICE,
    useClass: LoadSurveysServiceImpl
  }
]
