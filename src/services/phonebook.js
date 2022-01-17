import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'
// const baseUrlId = 

const getAllContacts = () =>{
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const createContact = (contactObj)=>{
    const req = axios.post(baseUrl, contactObj)
    return req.then(res => res.data)
}
const deleteContact = (id) =>{
    const req = axios.delete(`http://localhost:3001/persons/${id}`)
    return req.then(res => res.data)
}

export {
    getAllContacts,
    createContact,
    deleteContact
}