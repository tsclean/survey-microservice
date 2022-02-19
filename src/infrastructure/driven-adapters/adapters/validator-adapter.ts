import validator from 'validator'
import { IValidationsRepository } from '@/domain/models/contracts/validations-repository'

export class ValidatorAdapter implements IValidationsRepository {
  async validation (data: any): Promise<ValidatorAdapter.Response> {
    const errors = {}

    for (const key in data) {
      if (validator.isEmpty(data[key])) {
        errors[key] = `${key} is required`
      }
    }

    return {
      errors,
      isValid: await this.isValid(errors)
    }
  }

  async isValid (value: any): Promise<boolean> {
    const objectValue = typeof value === 'object' && Object.keys(value).length === 0
    const stringValue = typeof value === 'string' && value.trim().length === 0
    if (value === undefined || value === null || objectValue || stringValue) {
      return true
    }
  }
}

export namespace ValidatorAdapter {
  export type Response = {
    errors?: {}
    isValid: boolean
  }
}
