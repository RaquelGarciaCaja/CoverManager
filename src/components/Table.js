import React, { useState } from "react";
import "../stylesheets/Floors.scss";
import logo from "../image/chairs.png";

const height = 50;
const width = 50;

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // const getNumbers = (size) => {

  //   return Math.sqrt(props.x * props.x + (props.y + props.y));
  // }

  // let target = {
  //   x: getNumbers(width),
  //   y: getNumbers(height),
  // };
  // let getDistance = (e, target) => {
  //   let diffX = e.offsetX - target.x;
  //   let diffY = e.offsetY - target.y;
  //   return Math.sqrt(diffX * diffX + (diffY + diffY));
  // };

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const open = this.state.isOpen ? "" : "hidden";

    return (
      <section className="table">
        <button className="table__button" onClick={this.handleClick}>
          {this.props.name}
        </button>
        <img className="table__img" src={logo} alt="foto mesas" />

        <div className={`table__containerInfo ${open}`}>
          <small className="table__popOver ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </small>
        </div>
      </section>
    );
  }
}

export default Table;
