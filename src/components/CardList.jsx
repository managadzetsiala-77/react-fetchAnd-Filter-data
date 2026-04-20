import { useMemo } from "react";
import { useFetch } from "../hooks/useFetch";
import { useFilter } from "../store/useFilter";
import Card from "./Card";

const URL =
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital,subregion,cca3";

export default function CardList({}) {
  const { data } = useFetch(URL);
  const countryName = useFilter((state) => state.countryName);

  console.log(countryName);

  const filteredData = useMemo(() => {
    const name = countryName !== "";
    if (name) {
      return data.filter((item) => item.name.common.toLowerCase().includes(countryName.toLowerCase().trim()));
    }
    return data;
  }, [countryName, data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "55px",
        marginTop: "25px",
        backgroundColor: "#F2F2F2",
        alignItems: "center",
      }}
    >
      {filteredData.map((item) => (
        <Card key={item.cca3} obj={item} />
      ))}
    </div>
  );
}
