import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries, setCountry] = useState([]);
    useEffect(() => {

        fetch(`https://restcountries.eu/rest/v2/all`)
            .then(res => res.json())
            .then(data => setCountry(data))

    }, [])
    return (
        <div>
            <h1>Total countries here: {countries.length}</h1>
            <div className='Country-container'>
                {
                    countries.map(country => <Country
                        key={country.numericCode}
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;