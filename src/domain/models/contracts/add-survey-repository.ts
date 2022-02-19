import { AddSurveyParams } from '@/domain/models/survey';

export const ADD_SURVEY_REPOSITORY = 'ADD_SURVEY_REPOSITORY';

export interface IAddSurveyRepository {
  save: (data: AddSurveyParams) => Promise<void>;
}
