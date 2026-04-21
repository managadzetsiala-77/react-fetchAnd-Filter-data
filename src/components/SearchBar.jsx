import { useFilter } from "../store/useFilter"


export default function SearchBar() {

const countryName = useFilter((state) => state.countryName)
const findCountry = useFilter((state) => state.findCountry)

  return (
    <div  style={{width: "320px", height: "48px", borderRadius: "5px", boxShadow: "[0px_2px_9px_0px_rgba(0,0,0,0.05)]"}}>
      <div >
        <label htmlFor="name">🔎</label>
        <input value={countryName} onChange={(e) => findCountry(e.target.value)} type="text" name="name" id="name"/>
      </div>
    </div>
  )
}
