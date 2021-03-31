import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handlerFilterName = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    props.handlerFilter({ value: inputValue, name: inputName });
  };

  return (
    <section>
      <form className="floorsList">
        <label htmlFor="">Filtra por nombre</label>{" "}
        <input
          className="floorsList__input"
          type="text"
          placeholder="Mesa1"
          name="name"
          onChange={handlerFilterName}
        />{" "}
      </form>
      <small>Escribe la mesa que quieres buscar, visualizalo en la consola</small>
    </section>
  );
};

export default Filters;
