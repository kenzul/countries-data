import CountryItem from "./CountryItem";

const CountryList = ({ countries }) => {
    return (
        <ul>
            {countries.map((country) =>
                <CountryItem key={country.name.official} name={country.name.common}></CountryItem>)
            }
        </ul>
    )
}

export default CountryList;