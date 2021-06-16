// import axios from 'axios';
// import useSWR from 'swr';
import mockData from '../mocks/user.json'

export async function API_Profile_Data() {
    console.log(mockData)
    return mockData
}


    //const fetcher = (url: string) => axios.get(url).then((res) => res.data);
    // const fetcher = async (url: string) => {
    //     const { data } = await axios.get(url);
    //     if (data) {
    //         return data;
    //     }
    // };
    // const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/todos/1`, fetcher);
    // console.log(data, error);

    // if(error){
    //   return <div>Error....</div>
    // }
    // if(!data){
    //   return <div>Loading...</div>
    // }