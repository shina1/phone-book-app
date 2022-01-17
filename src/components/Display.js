import React from 'react'
import Button from './Button'

const display = ({persons, deleteHandler}) => {
    return (
        <div>
            {persons.map((person => {
                
                return <div key={person.id} className='list-item'>
                    <p>
                        {person.name} : {person.number}
                    </p> 
                   <div className='btn-group'>
                    <button onClick={()=> deleteHandler(person.name, person.id)} className='btn'>delete</button>
                        <Button text={'Edit'} className='btn'/>
                   </div>
                </div> 
            }))
            }    
        </div>
    )
}

export default display

 
