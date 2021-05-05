import React from 'react'

const ListCountry = ({country, handleClick}) => {
    return(
        <div>
            <p onClick={() => handleClick(country.id)}>{country.name}</p>
        </div>
    )
}
export default ListCountry