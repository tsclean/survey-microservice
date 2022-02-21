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

export const mockAddAccountParams = (): any => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAddSurveyParams = (): any => ({
  question: faker.random.words(),
  answers: [
    {
      image: faker.image.imageUrl(),
      answer: faker.random.word()
    },
    {
      answer: faker.random.word()
    }
  ],
  date: faker.date.recent()
})

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
