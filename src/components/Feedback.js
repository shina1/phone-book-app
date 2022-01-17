import React,{useState} from 'react'
import Buttons from './Buttons'
import Statistics from './Statistics'

const Feedback = () => {
    const [good, setGood] = useState(0)
    const [neautral, setNeautral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleGood = ()=>{
        setGood(good + 1)
    }
    const handleNeautral = ()=>{
        setNeautral(neautral + 1)
    }
    const handleBad = ()=>{
        setBad(bad + 1)
    }
    const allFeedback = ()=>{
        return good + neautral + bad
    }
    const average = ()=>{
        let addFeedback = good + neautral + bad 
        let avg = addFeedback / 3
        return avg 
    }
    const positiveFeedback = ()=>{
        let pst = (good / (good + neautral)) * 100
        return pst
    }
    return (
        <div>
            <h2>Give Feedback</h2>
            <Buttons onClick={handleGood} text={'Good'} />
             <Buttons onClick={handleNeautral} text={'Neautral'} />
            <Buttons onClick={handleBad} text={'Bad'} /> 
            <Statistics allFeedback={allFeedback} average={average} positiveFeedback={positiveFeedback} good={good} neautral={neautral} bad={bad}/>
        </div>
    )
}

export default Feedback
