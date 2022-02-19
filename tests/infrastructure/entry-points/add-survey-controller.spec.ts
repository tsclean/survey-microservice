import faker from '@faker-js/faker'
import { AddSurveyParams } from '@/domain/models/survey'
import { AddSurveyRepositorySpy, ValidationSpy } from '@/tests/domain/mocks/survey'
import { AddSurveyController } from '@/infrastructure/entry-points/api/add-survey-controller'
import { serverError } from '@/infrastructure/entry-points/helpers/status-code'

export const throwError = (): never => {
  throw new Error()
}

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
  date: new Date().toString()
})

type SutTypes = {
  sut: AddSurveyController
  addSurveySpy: AddSurveyRepositorySpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const addSurveySpy = new AddSurveyRepositorySpy()
  const validationSpy = new ValidationSpy()
  const sut = new AddSurveyController(addSurveySpy, validationSpy)
  return {
    sut,
    addSurveySpy,
    validationSpy
  }
}

describe('Add survey controller', () => {
  it('should call save with corrects values', async function () {
    const { sut, addSurveySpy } = makeSut()
    const request = mockRequest()
    await sut.addSurveyController(request)
    expect(addSurveySpy.params).toEqual(request)
  })

  it('Should return 500 if add survey controller throws', async () => {
    const { sut, addSurveySpy } = makeSut()
    jest.spyOn(addSurveySpy, 'save').mockImplementationOnce(throwError)
    const httpResponse = await sut.addSurveyController(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })
})
