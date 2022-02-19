import { SurveyModel } from '@/domain/models/survey'
import { model, Schema } from 'mongoose'

const schema = new Schema<SurveyModel>({
  id: {
    type: String
  },
  question: {
    type: String,
    required: true
  },
  answers: {
    required: true,
    type: [
      {
        image: String,
        answer: String
      }
    ]
  },
  date: Date.now(),
  didAnswer: {
    type: Boolean
  }
})

export const SurveyModelSchema = model<SurveyModel>('surveys', schema)
