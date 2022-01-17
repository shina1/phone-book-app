import React, {useState} from 'react'
import {anecdotes} from "../anecData"
import Buttons from './Buttons'

const Anecdotes = () => {
    const [selected, setSelected] = useState('Click to view anecdotes of the day')
    const [vote, setVote] = useState(0)
    const points = [1,4,6,3,5,4,7]
    const handleSelected = ()=>{
        let anecdote = anecdotes[~~(Math.random() * anecdotes.length)]
        setSelected(anecdote)
        let copy = [...points]
        let anecdoteVote = copy[Math.floor(Math.random() * copy.length)]
        setVote(anecdoteVote)
    }
    const handleVote = ()=>{
        setVote(vote + 1)
    }
    return (
        <div>
            <h2>Anecdotes Of The Day</h2>
            <p>{selected}</p>
            <p>has {vote} votes</p>
            <Buttons text={'Vote'} onClick={handleVote}/>
            <Buttons text={'Next Anecdote'} onClick={handleSelected} />
        </div>
    )
}
export default Anecdotes
