import axios from "axios"

const baseURL = 'http://localhost:3001/notes'

const getAll = async ()=>{
    const req = axios.get(baseURL)
    const res = await req
    return res.data
}

const create = async (newObject) => {
    const req = axios.post(baseURL, newObject)
    const res = await req
    return res.data
}

const update = (id, newObject) =>{
    return axios.put(`${baseURL}/${id}`, newObject)
}

export default {
    getAll,
    create,
    update
}