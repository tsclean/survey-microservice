import { AddSurveyParams } from '@/domain/models/survey';
import { SurveyModelSchema as Model } from '@/infrastructure/driven-adapters/adapters/orm/mongoose/models/survey';
import { IAddSurveyRepository } from '@/domain/models/contracts/add-survey-repository';

export class SurveyMongooseRepositoryAdapter implements IAddSurveyRepository {
  async save(data: AddSurveyParams): Promise<void> {
    await Model.create(data);
  }
}
