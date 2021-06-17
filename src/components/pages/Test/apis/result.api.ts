import MockResultData from '../mocks/result.json'
import axios from 'axios'

interface Result {
    categories: string;
    data: number;
}


export const apiResult =  async () => {
   console.log('Response',MockResultData)
   return MockResultData as unknown as Array<Result>
}
