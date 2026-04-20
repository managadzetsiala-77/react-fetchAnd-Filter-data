import { useFilter } from "../store/useFilter"


export default function SearchBar() {

const countryName = useFilter((state) => state.countryName)
const findCountry = useFilter((state) => state.findCountry)

  return (
    <div>
      <div>
        <label htmlFor="name">🔎</label>
        <input value={countryName} onChange={(e) => findCountry(e.target.value)} type="text" name="name" id="name"/>
      </div>
    </div>
  )
}
