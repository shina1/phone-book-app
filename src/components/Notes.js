import React, {useState,useEffect} from 'react'
import noteService from '../services/notes'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [newNotes, setNewNotes] = useState('')
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        noteService
        .getAll()
        .then(allNotes => {
            setNotes(allNotes)
        })
    }, [])


    const handleSubmit = (e)=>{
        e.preventDefault()
        const noteObject = {
            content: newNotes,
            date: new Date().toISOString().split(':')[0],
            important: Math.random() < 0.5,
        }

        noteService
        .create(noteObject)
        .then(createdNote => {
            createdNote.content ? setNotes(notes.concat(createdNote)) : console.log('note can not be empty')     
        })
        setNewNotes('')
    }

    const addNotes = (e)=>{
        setNewNotes(e.target.value)
    }
    // const deleteHandler = (id) => {
    //     const filteredNotes = notes.filter(note => {
    //         console.log(note.id !== id)
    //     })
    // }
    // const toggleImportance = (id) => {
    //     const url = `http://localhost:3001/notes/${id}`
    //     const note_id = notes.find(n => n.id === id)
    //     const changedNote = { ...note_id, important: !note_id.important }

    //     axios.put(url, changedNote).then(res => {
    //         setNotes(notes.map( note => note.id !== id ? note : res.data))
    //     })   
    // }
    // const labels = notes.map(note => {
    //     return note.important ? 'make not important' : 'make important'
    // })
   
    const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

    return (
        <>
           <h2>Notes</h2>
           <div>
               <button onClick={()=> setShowAll(!showAll)}>
                   show{showAll ? ' important' : ' All'}
               </button>
           </div>
           <ul>
               {
                   notesToShow.map((note, id) => {
                     return <li key={note.id}>
                           <div><p>note: {note.content}</p> <p> Date: {note.date}</p>
                           </div>
                           <button>delete</button> 
                       </li>
                   }

                   )
               }
           </ul> 
           <div>
               <form>
                   <input type='text' placeholder='enter your note...' value={newNotes} onChange={addNotes}/>
                   <button type='submit' onClick={handleSubmit}>save</button>
               </form>
           </div>
          
        </>
    )
}

export default Notes
