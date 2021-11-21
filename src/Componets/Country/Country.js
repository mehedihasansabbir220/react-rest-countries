import React from 'react';
import './Country.css'

const Country = (props) => {
    const{name,flag,region,capital,population}=props.country
    console.log(props.country)
   
    return (
        <div className='country'>
            <h1>Country name:{name}</h1>
            <img src={flag} alt="" />
            <p><small>Region:{region}</small></p>
            <p>Capital name:{capital} Population:{population}</p>

        </div>
    );
};

export default Country;