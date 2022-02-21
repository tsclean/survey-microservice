import { Adapter, Service } from '@tsclean/core'
import { ILoadSurveyByIdService } from '@/domain/use-cases/load-survey-by-id-service'
import {
  ILoadSurveyByIdRepository,
  LOAD_SURVEY_BY_ID_REPOSITORY
} from '@/domain/models/contracts/load-survey-by-id-repository'

@Service()
export class LoadSurveyByIdServiceImpl implements ILoadSurveyByIdService {
  constructor (
    @Adapter(LOAD_SURVEY_BY_ID_REPOSITORY)
    private readonly loadSurveyByIdRepository: ILoadSurveyByIdRepository
  ) {
  }

  async loadById (id: string): Promise<ILoadSurveyByIdService.Result> {
    return await this.loadSurveyByIdRepository.loadById(id)
  }
}
