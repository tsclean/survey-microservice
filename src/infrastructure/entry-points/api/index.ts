import { AddSurveyController } from './add-survey-controller'
import { LoadSurveyByIdController } from '@/infrastructure/entry-points/api/load-survey-by-id-controller'
import { LoadSurveysController } from '@/infrastructure/entry-points/api/load-surveys-controller'
import { SaveSurveyResultController } from '@/infrastructure/entry-points/api/save-survey-result-controller'

export const controllers = [
  AddSurveyController,
  LoadSurveyByIdController,
  LoadSurveysController,
  SaveSurveyResultController
]
