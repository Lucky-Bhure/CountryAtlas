import React from 'react'

const SearchFilter = ({search, setSearch, filter, setFilter, countryData, setCountryData}) => {

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }
         
    const sortCountries = (value) => {
        const sortCountry = [...countryData].sort((a,b) => {
            return  value == "asc"
            ? a.name.common.localeCompare(b.name.common) : 
            b.name.common.localeCompare(a.name.common);
        });

        setCountryData(sortCountry);
    }   


  return (
    <div className="sorting-container">
        <input type="text" value={search} onChange={handleInputChange} className='search-input' placeholder="Search Country"/>
        <button onClick={() => sortCountries("asc")}>Asc</button>
        <button onClick={() => sortCountries("desc")}>Desc</button>
        <div>
            <select value={filter} onChange={handleSelectChange} className='search-input'>
                <option value="all" className='option'>All</option>
                <option value="Africa" className='option'>Africa</option>
                <option value="Americas" className='option'>Americas</option>
                <option value="Asia" className='option'>Asia</option>
                <option value="Europe" className='option'>Europe</option>
                <option value="Oceania" className='option'>Oceania</option>
            </select>
        </div>
      </div>
  )
}

export default SearchFilter
