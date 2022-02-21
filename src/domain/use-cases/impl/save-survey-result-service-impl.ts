import { Adapter, Service } from '@tsclean/core'
import { ISaveSurveyResultService } from '@/domain/use-cases/save-survey-result-service'
import {
  ISaveSurveyResultRepository,
  SAVE_SURVEY_RESULT_REPOSITORY
} from '@/domain/models/contracts/save-survey-result-repository'
import {
  ILoadSurveyResultRepository,
  LOAD_SURVEY_RESULT_REPOSITORY
} from '@/domain/models/contracts/load-survey-result-repository'

@Service()
export class SaveSurveyResultServiceImpl implements ISaveSurveyResultService {
  constructor (
    @Adapter(SAVE_SURVEY_RESULT_REPOSITORY)
    private readonly saveSurveyResultRepository: ISaveSurveyResultRepository,
    @Adapter(LOAD_SURVEY_RESULT_REPOSITORY)
    private readonly loadSurveyResultRepository: ILoadSurveyResultRepository
  ) {
  }

  async save (data: ISaveSurveyResultService.Params): Promise<ISaveSurveyResultService.Result> {
    await this.saveSurveyResultRepository.save(data)
    return this.loadSurveyResultRepository.load(data.surveyId, data.accountId)
  }
}
