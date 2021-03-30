import React, { useState } from "react";
import "../stylesheets/App.scss";
import restaurants from "../data/data";
import Filters from "./Filters";
import Restaurants from "./Restaurants";

const App = () => {
  //states
  const [filterName, setFilterName] = useState("");

  const handlerFilter = (data) => {
    if (data.name === "name") {
      setFilterName(data.value);
    }
  };

  const filterTables = Object.values(restaurants[0].tables).filter((c) =>
    c.name_table.toLowerCase().includes(filterName.toLowerCase())
  );
  return (
    <section className="app">
      <Filters handlerFilter={handlerFilter} className="app__filters" />
      <Restaurants className="app" filtered={filterTables} restaurants={restaurants} />
    </section>
  );
};

export default App;
