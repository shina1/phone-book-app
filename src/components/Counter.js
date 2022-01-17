import React, {useState} from 'react'
import Buttons from './Buttons'

const Counter = (props) => {
    const [counter, setCounter] = useState(0)
    
    const handleClick = () =>{
            setCounter(counter + 1)
    }
    const setToZero = () =>{
        setCounter(0)
    }
    const decrease = ()=>{
        setCounter(counter - 1)
    }
    return (
        <div>
            {counter}
            <br />
            <Buttons onClick={handleClick} text={'plus'}/>
            <br/>
            <Buttons onClick={setToZero} text={'reset'} />
            <br/>
            <Buttons onClick={decrease} text={'decrease'} />
        </div>
    )
}

export default Counter
