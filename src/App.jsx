import { useState } from "react"
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
function App() {

  const [countryName, setCountryName] = useState("")
  return (
    <>
    <SearchBar countryName={countryName} onSearch={setCountryName}/>
      <CardList countryName={countryName}/>
    </>
  );
}

export default App;
