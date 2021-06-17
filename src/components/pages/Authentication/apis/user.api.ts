import mockData from '../mocks/login.json'
import { ILogin } from '../shared/login.interface'

export async function API_Login_Data() {
    console.log(mockData)
   return mockData as unknown as Array<ILogin>
}