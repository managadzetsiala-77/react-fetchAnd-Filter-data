import { useFilter } from "../store/useFilter"


export default function RegionFilter() {

const regionName = useFilter ((state) => state.regionName)
const findRegion = useFilter((state) => state.findRegion)
  return (
    <div>
     <form>
        <select onChange={(e) => findRegion(e.target.value)}
        style={{width: "172px", height: "48px", borderRadius: "5px", boxShadow: "[0px_2px_9px_0px_rgba(0,0,0,0.05)]"}}
         name="" id="">
            <option value="All">All region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
        </select>
     </form>
    </div>
  )
}
