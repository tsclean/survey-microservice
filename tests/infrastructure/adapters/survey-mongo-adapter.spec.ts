import { connect, connection } from 'mongoose'
import { SurveyMongooseRepositoryAdapter } from '@/infrastructure/driven-adapters'
import { mockAddAccountParams, mockAddSurveyParams, mockSurveyModel } from '@/tests/domain/mocks/survey'

const makeSut = (): SurveyMongooseRepositoryAdapter => {
  return new SurveyMongooseRepositoryAdapter()
}

const db = connection

const mockAccountId = async (): Promise<string> => {
  const res = await db.collection('surveys').insertOne(mockAddAccountParams())
  return res.insertedId.toHexString()
}

describe('Survey mongoose adapter', () => {
  beforeAll(async () => {
    await connect(process.env.MONGO_URL)
    db.on('open', () => console.log('Database starting...'))
  })

  beforeEach(async () => {
    if (await db.collection('surveys').countDocuments()) {
      return db.collection('surveys').deleteMany({})
    }
  })

  afterAll(async () => {
    return db.close()
  })

  it('should add a survey on success', async function () {
    const sut = makeSut()
    await sut.save(mockSurveyModel())
    const count = await db.collection('surveys').countDocuments()
    expect(count).toBe(1)
  })

  it('should load surveys on success', async function () {
    const accountId = await mockAccountId()
    const addSurveyModels = [mockAddSurveyParams(), mockAddSurveyParams()]
    const result = await db.collection('surveys').insertMany(addSurveyModels)
    const survey = await db.collection('surveys').findOne({ _id: result.insertedIds[0] })
    await db.collection('surveyResults').insertOne({
      surveyId: survey._id,
      accountId: accountId,
      answer: survey.answers[0],
      date: new Date()
    })
    const sut = makeSut()
    const surveys = await sut.load(accountId)
    expect(surveys).toBeTruthy()
  })
})
