
const Search = ({ query, onChange }) => {
    return (
        <p>
            <label htmlFor="query">find countries</label>
            <input type="text" value={query} onChange={onChange} name="query" id="query"></input>
        </p>
    )

}

export default Search;