import { connect, connection } from 'mongoose'
import { SurveyMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters'
import { mockSurveyModel } from '@/tests/domain/mocks/survey'

const makeSut = (): SurveyMongooseRepositoryAdapter => {
  return new SurveyMongooseRepositoryAdapter()
}

const db = connection

describe('Survey mongoose adapter', () => {
  beforeAll(async () => {
    await connect(process.env.MONGO_URL)
    db.on('open', () => console.log('Database starting...'))
  })

  beforeEach(async () => {
    if (db.collection('surveys').countDocuments()) {
      return db.collection('surveys').deleteMany({})
    }
  })

  afterAll(async () => {
    return db.close()
  })

  test('should add a survey on success', async function () {
    const sut = makeSut()
    await sut.save(mockSurveyModel())
    const count = await db.collection('surveys').countDocuments()
    expect(count).toBe(1)
  })
})
