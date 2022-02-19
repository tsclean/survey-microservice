export class ServerError extends Error {
  constructor (stack: string) {
    super('Internal Server Error')
    this.name = 'ServerError'
    this.stack = stack
  }
}

export type HttpResponse = {
  statusCode: number
  body: any
}

export const badRequest = (error: any | any[]): HttpResponse => ({
  statusCode: 422,
  body: error
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})
