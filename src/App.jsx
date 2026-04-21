import { useState } from "react"
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
function App() {


  return (
    <>
    <SearchBar />
    <RegionFilter />
      <CardList />
    </>
  );
}

export default App;
