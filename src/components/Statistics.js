import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({good, neautral, bad, allFeedback, average, positiveFeedback}) => {
    if(allFeedback() === 0){
        return(
            <p>No Feedback given</p>
        )
    }else{
    return (
        <div>
        <h3>Statistics</h3>
        <StatisticLine text={'Good'} statistic={good} />
        <StatisticLine text={'Neautral'} statistic={neautral} />
        <StatisticLine text={'Bad'} statistic={bad} />
        <StatisticLine text={'All'} statistic={allFeedback()} />
        <StatisticLine text={'Average'} statistic={average()} />
        <StatisticLine text={'Positive'} symbol={'%'} statistic={positiveFeedback()} />
    </div>
    )
}
}

export default Statistics
