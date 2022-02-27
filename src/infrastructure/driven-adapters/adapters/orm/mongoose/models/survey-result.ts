import { model, Schema } from 'mongoose'
import { SurveyResultModel } from '@/domain/models/survey-result'

const schema = new Schema<SurveyResultModel>({
  accountId: {
    type: String
  },
  surveyId: {
    type: String
  },
  question: {
    type: String
  },
  answers: {
    type: [
      {
        image: String,
        answer: String,
        count: Number,
        percent: Number,
        isCurrentAccountAnswer: Boolean
      }
    ]
  },
  date: Date
})

export const SurveyResultModelSchema = model<SurveyResultModel>('surveyResults', schema)
