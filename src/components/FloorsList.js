import React from "react";
import "../stylesheets/Floors.scss";
import Floor from "./Floor";

const FloorsList = (props) => {
  //name
  const eachZonesName = Object.entries(props.data.floors).map((a) => a);

  return (
    <section className="floorsList">
      <Floor data={eachZonesName} />{" "}
    </section>
  );
};

export default FloorsList;
