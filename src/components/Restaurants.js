import React from "react";
import "../stylesheets/restaurant.scss";
import { Switch, Route } from "react-router-dom";
import FloorsList from "./FloorsList";
import ZonesList from "./ZonesList";
import restaurants from "../data/data";

const Restaurants = (props) => {
  console.log(props.filtered);
  //floors
  const allFloors = props.restaurants.map((floor, index) => {
    return (
      <div className="restaurant__floor" key={index}>
        <FloorsList data={floor} />{" "}
      </div>
    );
  });

  //render zones
  const renderZones = (props) => {
    //click
    const floorId = parseInt(props.match.params.id_floor);

    //found zones
    const foundZones = Object.values(restaurants[0].zones).find((a) => a.floor == floorId);

    //found tables
    const foundTables = Object.values(restaurants[0].tables).filter(
      (c) => c.id_zone == foundZones.id_zone
    );

    if (Object.values(restaurants[0].zones).find((a) => a.floor == floorId) !== undefined) {
      return (
        <section className="restaurant__zones">
          <ZonesList data={foundTables} />
        </section>
      );
    }
  };

  return (
    <section className="restaurant">
      <section className="restaurant__floors">{allFloors}</section>
      <Switch>
        <Route path="/Floor/:id_floor" render={renderZones} />
      </Switch>
    </section>
  );
};

export default Restaurants;
