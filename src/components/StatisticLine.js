import React from 'react'

const StatisticLine = ({text,symbol, statistic}) => {
    return (
        <div>
           <p>{text} <span>{statistic}</span> {symbol}</p> 
        </div>
    )
}

export default StatisticLine
