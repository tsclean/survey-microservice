import { Mapping, Get, Param, Adapter } from '@tsclean/core'
import { ILoadSurveyByIdService, LOAD_SURVEY_BY_ID_SERVICE } from '@/domain/use-cases/load-survey-by-id-service'

@Mapping('api/v1/load-survey-by-id')
export class LoadSurveyByIdController {
  constructor (
    @Adapter(LOAD_SURVEY_BY_ID_SERVICE)
    private readonly loadSurveyByIdService: ILoadSurveyByIdService
  ) {
  }

  @Get(':id')
  async loadSurveyByIdController (@Param() id: string): Promise<any> {
    return await this.loadSurveyByIdService.loadById(id.id)
  }
}
