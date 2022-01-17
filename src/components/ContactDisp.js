import React from 'react'
import Display from './Display'

const ContactDisp = ({text, persons, deleteHandler}) => {
    return (
        <div className='contact-disp'>
            <h2>{text}</h2>
                <div className='list'>
                    <Display  text={'Numbers'} persons={persons} deleteHandler={deleteHandler}/>
                </div>
        </div>
    )
}

export default ContactDisp
