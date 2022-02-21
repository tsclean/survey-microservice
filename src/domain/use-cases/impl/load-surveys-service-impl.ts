import { Adapter, Service } from '@tsclean/core'
import { ILoadSurveysService } from '@/domain/use-cases/load-surveys-service'
import { ILoadSurveysRepository, LOAD_SURVEYS_REPOSITORY } from '@/domain/models/contracts/load-surveys-repository'

@Service()
export class LoadSurveysServiceImpl implements ILoadSurveysService {
  constructor (
    @Adapter(LOAD_SURVEYS_REPOSITORY)
    private readonly loadSurveysRepository: ILoadSurveysRepository
  ) {
  }

  async load (accountId: string): Promise<ILoadSurveysService.Result> {
    return await this.loadSurveysRepository.load(accountId)
  }
}
