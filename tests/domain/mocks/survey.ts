import faker from '@faker-js/faker'
import { AddSurveyParams, SurveyModel } from '@/domain/models/survey'
import { IAddSurveyRepository } from '@/domain/models/contracts/add-survey-repository'
import { IValidationsRepository } from '@/domain/models/contracts/validations-repository'

export const mockSurveyModel = (): SurveyModel => {
  return {
    id: faker.datatype.uuid(),
    question: faker.random.words(),
    answers: [
      {
        answer: faker.random.word()
      },
      {
        answer: faker.random.word(),
        image: faker.image.imageUrl()
      }
    ],
    date: faker.random.word()
  }
}

export class AddSurveyRepositorySpy implements IAddSurveyRepository {
  params: AddSurveyParams

  async save (data: AddSurveyParams): Promise<void> {
    this.params = data
  }
}

export class ValidationSpy implements IValidationsRepository {
  error: Error = null
  input: any

  async validation (data: any, toValidate: string[] | undefined, file: any): Promise<any> {
    this.input = data
    return this.error
  }
}
