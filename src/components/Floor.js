import React from "react";
import "../stylesheets/Floors.scss";
import { Link } from "react-router-dom";

import "../stylesheets/Floors.scss";

const Floor = (props) => {
  // id and name
  const eachZonesId = Object.values(props.data).map((a) => (
    <li className="floor__each" key={a[0]}>
      <Link to={`/Floor/${a[1].id_floor}`}>
        <button className="floor__button">{a[1].name}</button>
      </Link>
    </li>
  ));

  return (
    <section className="floor">
      {" "}
      <ul className="floor__list">{eachZonesId}</ul>
    </section>
  );
};

export default Floor;
