import React, { useState } from "react";
import "../stylesheets/Floors.scss";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

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
