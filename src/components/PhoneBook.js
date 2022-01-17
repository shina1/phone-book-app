import React,{useState, useEffect} from 'react'
import ContactDisp from './ContactDisp'
import PhoneForm from './PhoneForm'
import SearchResult from './SearchResult'
import * as phonebookService from '../services/phonebook'



const PhoneBook = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [number, setNumber] = useState('')
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const abort = new AbortController()
        phonebookService
        .getAllContacts()
        .then(contacts => {
            let data = [...contacts]
            setPersons(data)
        })
        .catch(error => console.log(error))
        return () => abort.abort()  //abort fetches on mount
    }, [])
    
    
    const addName = (e) =>{
        setNewName(e.target.value)
    }
    const addNumber = (e) => {
        setNumber(e.target.value)
    }
    // ====================== the function for adding contact to the state ================
    const addContact = (e) =>{
        e.preventDefault()
        const personObj = {
            name: newName,
            number: number,
        }
        phonebookService
        .createContact(personObj)
        .then(createdData => {
            setPersons(persons.concat(createdData))  
            setNewName('')
        })
        .catch(error => {
            console.log('failed to add', error);
        })
        }
// ==================================
        const handleSearch = (e)=>{
            e.preventDefault()
            setSearch(e.target.value.toLowerCase())
        }
        useEffect(() => {
            const newPersons = [...persons]
            const searchResult = newPersons.filter(person => person.name.toLowerCase().includes(search))
            setResults(searchResult)
        }, [search, persons])

        
        const deleteHandler = (personToDelete, id)=>{
            const confirmResult = window.confirm(`are you sure you wanna delete ${personToDelete} ?`)
            if (confirmResult) {
                phonebookService
                .deleteContact(id)
                .then(() => {
                    if(phonebookService.deleteContact(id)){
                            phonebookService
                        .getAllContacts()
                        .then(contact => {
                            const newPersons = [...contact]
                            setPersons(newPersons)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    }
                    // window.location.reload(true)
                })
            }
           
        }
      

    return (
        <div className='phone-cont'>
            <h2>PhoneBook</h2>
            <div>
                <h3>search</h3>
                <form>
                    <input type='text' value={search} placeholder='search...' onChange={handleSearch} />
                </form>
                <div>
                   <SearchResult text={'Search Result'} search={search} results={results}/>
                </div>
            </div>
            <h3>Add Contact</h3>
            <PhoneForm addName={addName} addNumber={addNumber} number={number} addContact={addContact} newName={newName}/>
            <div>        
                <ContactDisp  text={'Numbers'} persons={persons} deleteHandler={deleteHandler}/>
            </div>
        </div>
    )
}

export default PhoneBook
