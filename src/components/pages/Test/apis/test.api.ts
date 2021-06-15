import mockTestData from '../mocks/question.json'
import { IQuestion } from '../shared/interface/test.interfaces'

export async function API_Test_Data() {
    console.log(mockTestData)
   return mockTestData as unknown as Array<IQuestion>
}