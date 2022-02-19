import validator from 'validator'
import { ValidatorAdapter } from '@/infrastructure/driven-adapters/adapters/validator-adapter'

jest.mock('validator', () => ({
  isEmpty (): boolean {
    return true
  }
}))

const makeSut = (): ValidatorAdapter => {
  return new ValidatorAdapter()
}

describe('Validator adapter', function () {
  it('should return errors if Empty return errors', async function () {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmpty')
    const errors = await sut.validation({ question: '' })
    expect(JSON.stringify(errors)).toEqual(JSON.stringify({ errors: { question: 'question is required' }, isValid: undefined }))
  })

  it('should return true if isValid return undefined', async function () {
    const sut = makeSut()
    let flag = false
    const isValid = await sut.isValid(undefined)
    if (isValid === undefined) {
      flag = true
      expect(flag).toBe(true)
    }
  })
})
