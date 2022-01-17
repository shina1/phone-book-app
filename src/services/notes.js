import axios from "axios"

const baseURL = 'http://localhost:3001/notes'

const getAll = ()=>{
    const req = axios.get(baseURL)
    return req.then(res => res.data)
}

const create = (newObject) => {
    const req = axios.post(baseURL, newObject)
    return req.then(res => res.data)
}

const update = (id, newObject) =>{
    return axios.put(`${baseURL}/${id}`, newObject)
}

export default {
    getAll,
    create,
    update
}