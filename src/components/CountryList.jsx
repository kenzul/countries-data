import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => {
    return (
        <ul>
            {countries.map((country) =>
                <CountryItem key={country.name.official} country={country}></CountryItem>)
            }
        </ul>
    )
}

export default CountryList;