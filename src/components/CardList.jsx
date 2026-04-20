import { useFetch } from "../hooks/useFetch";
import Card from "./Card";

const URL = "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3";

export default function CardList({countryName}) {
  const { data } = useFetch(URL);
  console.log(countryName);
  
  return (
    <div>
  {data.map((item) => (<Card key={item.cca3} obj={item}/>) )}
    </div>
  );
}
