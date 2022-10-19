import axios from 'axios';
const baseURL = 'https://restcountries.com/v3.1/all';

const getAllCountries = async () =>{
    const req = await axios.get(baseURL)
    const res = req
    return res.data
}


export{
    getAllCountries
}