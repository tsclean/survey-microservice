import { AddSurveyParams } from '@/domain/models/survey';

export const ADD_SURVEY_SERVICE = 'ADD_SURVEY_SERVICE';

export interface IAddSurveyService {
  save: (data: AddSurveyParams) => Promise<void>;
}
