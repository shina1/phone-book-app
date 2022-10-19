import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'
// const baseUrlId = 

const getAllContacts = async () =>{
    const req = await axios.get(baseUrl)
    const res = req
    return res.data
}

const createContact = async (contactObj)=>{
    const req = await axios.post(baseUrl, contactObj)
    const res = req
    return res.data
}
const deleteContact = async (id) =>{
    const req = await axios.delete(`http://localhost:3001/persons/${id}`)
    const res =  req
    return res.data
}

export {
    getAllContacts,
    createContact,
    deleteContact
}