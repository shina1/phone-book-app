import React from 'react'

const FilterCountry = ({results, countries}) => {
    console.log(results);
 if(results.length === countries.length){
    return (
        <div></div>
    )
 }
 if(results.length <= 10 && results.length > 1){
    return(
        <div>
            <span>I got here</span>
                {
                    results.map(result => (
                        <div key={result.name.common} style={{display: 'flex'}}>
                            <h4>{result.name.common}</h4>
                            <button className='btn-small'>View Details</button>
                        </div>
                    ))
                }
        </div>
    )
 }else if(results.length === 1){
             return(
                    <div >
                        <span>Country: </span>
                        {
                            // results.map(result => (
                                <div key={results[0].name.common}>
                                    <h3>{results[0].name.common}</h3>
                                    <p>Continent: {results[0].continents[0]}</p>
                                    <p>Capital: {results[0].capital[0]}</p>
                                    <p>Area: {results[0].area}</p>
                                    <p>Population: {results[0].population}</p>
                                    <h4>Languages:</h4>
                                    {
                                        Object.keys(results[0].languages).map(language => (
                                            <ul key={language}>
                                                <li>{results[0].languages[language]}</li>
                                            </ul>
                                        ))
                                    }
                                    <img src={results[0].coatOfArms.png} alt='country coat of arms' style={{width: 150}}/>
                                </div>
                            // ))
                        }
                    </div>
             )
 }
 else{
    return (
        <div>
            Too many matches, specify another filter
        </div>
    )
 }
}

export default FilterCountry
