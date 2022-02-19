import faker from '@faker-js/faker'
import { AddSurveyParams } from '@/domain/models/survey'
import { AddSurveyServiceImpl } from '@/domain/use-cases/impl/add-survey-service-impl'
import { AddSurveyRepositorySpy } from '@/tests/domain/mocks/survey'

const mockRequest = (): AddSurveyParams => ({
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
})

type SutTypes = {
  sut: AddSurveyServiceImpl
  addSurveySpy: AddSurveyRepositorySpy
}

const makeSut = (): SutTypes => {
  const addSurveySpy = new AddSurveyRepositorySpy()
  const sut = new AddSurveyServiceImpl(addSurveySpy)
  return {
    sut,
    addSurveySpy
  }
}

describe('Add survey controller', () => {
  test('should call save with corrects values', async function () {
    const { sut, addSurveySpy } = makeSut()
    const request = mockRequest()
    await sut.save(request)
    expect(addSurveySpy.params).toEqual(request)
  })
})
