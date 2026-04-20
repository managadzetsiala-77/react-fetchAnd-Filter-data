

export default function SearchBar({countryName, onSearch}) {


  return (
    <div>
      <div>
        <label htmlFor="name">🔎</label>
        <input type="text" name="name" id="name" value={countryName} onChange={(e) => onSearch(e.target.value)}/>
      </div>
    </div>
  )
}
