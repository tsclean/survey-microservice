import { AddSurveyServiceImpl } from '@/domain/use-cases/impl/add-survey-service-impl'
import { AddSurveyRepositorySpy, mockSurveyModel } from '@/tests/domain/mocks/survey'

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

describe('Add survey use case', () => {
  it('should call add survey with values corrects', async function () {
    const { sut, addSurveySpy } = makeSut()
    const mockData = mockSurveyModel()
    await sut.save(mockData)
    expect(addSurveySpy.params).toEqual(mockData)
  })
})
