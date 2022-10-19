import React, { useEffect, useState } from 'react'
import * as countryService from '../services/countryService'
import FilterCountry from './FilterCountry'
const FindCountries = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')

    let results = !search?countries:countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));

  

    useEffect(()=>{
        const abort = new AbortController();
        countryService
        .getAllCountries()
        .then(country => {
            let countryData = [...country]
            setCountries(countryData);
        })
        .catch(error => console.log(error))
        return () => abort.abort()  //abort fetches on mount
    }, []);

    const setFormValue = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }     
    
  return (
    <div className='country-wrapper'>
        <div className='form-wrapper'>
            <form>
                <label htmlFor='search'>Search</label>
                <input type='text' name='search' value={search} placeholder='search' onChange={(e) => setFormValue(e)} />
            </form>
        </div>
        <div className='result-disp'>
            {
                // search && <div>
                //     {
                //         results.map(result => (
                //             result.name.common.length > 10 ? <h3>Too many mathces, specify another filter</h3> :
                //             <div>
                //                 <h3>{result.name.common}</h3>
                //             </div>
                //         ))
                //     }
                // </div>
                search && <FilterCountry results={results} countries={countries}/>
            }
        </div>
    </div>
  )
}

export default FindCountries
