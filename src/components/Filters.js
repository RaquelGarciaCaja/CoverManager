import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handlerFilterName = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    props.handlerFilter({ value: inputValue, name: inputName });
  };

  return (
    <form className="floorsList">
      <label htmlFor="">
        Filtra por nombre
        <input
          className="filter__input"
          type="text"
          placeholder="Mesa1"
          name="name"
          onChange={handlerFilterName}
        />{" "}
        <small>Si escribes la mesa que quieres filtrar se plasma en la consola</small>
      </label>{" "}
    </form>
  );
};

export default Filters;
