import React from 'react'

const SearchResult = ({search, results, text}) => {
    return (
        <div>
             <h3>{text}</h3>
                <div className='search-cont'>
                    {
                        !search ? <p>Search Results...</p> : results.map(result => {
                        return <p key={result.id}><span>{result.name}</span> : <span>{result.number}</span></p>
                    }) 
                    } 
            </div>
        </div>
    )
}

export default SearchResult
