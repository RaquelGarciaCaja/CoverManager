import React from "react";
import "../stylesheets/Floors.scss";
import Table from "./Table";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ZonesList = (props) => {
  // console.log(props.data);
  const tables = Object.values(props.data).map((a) => (
    <li className="zonesList__list" key={a.id_table}>
      {" "}
      <Table name={a.name_table} x={a.x} y={a.y} />
    </li>
  ));

  return (
    <section>
      <h5>Intenta a hacer zoom en las mesas</h5>
      <TransformWrapper defaultScale={1} defaultPositionX={1} defaultPositionY={1}>
        <TransformComponent>
          <section className="zonesList">
            <div>{tables}</div>{" "}
          </section>
        </TransformComponent>
      </TransformWrapper>
    </section>
  );
};

export default ZonesList;
