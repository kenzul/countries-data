
const CountryView = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital[0]}</p>
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                {Object.values(country.languages).
                    map((language) => <li key={`${country.name.common}${language}`}>{language}</li>)
                }
            </ul>
            <img src={country.flags.png} alt={`${country.name.common}'s flag`}></img>
        </div>
    )
}

export default CountryView;