import React, {useState} from 'react'
import Buttons from './Buttons'
import History from './History'

const LeftRight = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = ()=>{
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    const handleRightClick = () =>{
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }
    return (
        <div>
            {left}
            <Buttons onClick={handleLeftClick} text={'left'} />
            <Buttons onClick={handleRightClick} text={'right'} />
            {right}
            <History allClicks={allClicks}/>
        </div>
    )
}

export default LeftRight
