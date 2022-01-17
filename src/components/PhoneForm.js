import React from 'react'

const PhoneForm = ({addName, addNumber, number, addContact, newName}) => {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='name...' onChange={addName}/>
                    <label>number</label>
                    <input type='text' placeholder='number...' value={number} onChange={addNumber}/>
                </div>
                <button type='submit' value={newName} onClick={addContact} className='btn'>add</button>
            </form>
        </div>
    )
}

export default PhoneForm
