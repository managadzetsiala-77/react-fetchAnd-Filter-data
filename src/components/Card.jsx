
function Card({obj}) {
    return (<>
    <div style={{width: "300px"}}>
        <img src={obj.flags.svg} alt="" style={{width: "100%"}}/>
        <div style={{padding: "10px", backgroundColor: "greenyellow"}}>
            <h2>{obj.name.common}</h2>
            <h3>Population: <span>{obj.population.toLocaleString()}</span> </h3>
            <h3>Region:  <span>{obj.region}</span> </h3>
            <h3>Capital:  <span>{obj.capital}</span> </h3>
        </div>
    </div>
    </>)
}
export default Card;