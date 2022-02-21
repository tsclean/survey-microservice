import { Mapping, Get, Adapter, Param } from '@tsclean/core'
import { ILoadSurveysService, LOAD_SURVEYS_SERVICE } from '@/domain/use-cases/load-surveys-service'
import { HttpResponse, noContent, ok, serverError } from '@/infrastructure/entry-points/helpers/status-code'

@Mapping('api/v1/load-surveys')
export class LoadSurveysController {
  constructor (
    @Adapter(LOAD_SURVEYS_SERVICE)
    private readonly loadSurveysService: ILoadSurveysService
  ) {
  }

  @Get(':accountId')
  async loadSurveysController (@Param() accountId: string): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveysService.load(accountId)
      return surveys.length ? ok(surveys) : noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
