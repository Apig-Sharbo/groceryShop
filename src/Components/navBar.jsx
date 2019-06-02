import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBar from "./SearchBar";

const NaviBar = ({ data, handleFilter, handleFormSubmit }) => {
  const [search, ChangeSearch] = useState("");
  const [active, ChangeActive] = useState("");
  let countCart = _.reduce(
    data,
    (acc, cur) => {
      return acc + cur.count;
    },
    0.0
  );
  const HandleChange = e => {
    ChangeSearch(e.target.value);
  };
  return (
    <div className="ml-4 col-lg-11">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Organic Foods{"\u00AE"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5
                className={
                  active === "Home"
                    ? "btn btn-dark  d-block text-primary active"
                    : "btn btn-dark  d-block"
                }
                onClick={() => {
                  ChangeActive("Home");
                  handleFilter("all");
                }}
              >
                Home
              </h5>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5
                className={
                  active === "fruit"
                    ? "btn btn-dark  d-block text-primary active"
                    : "btn btn-dark  d-block"
                }
                onClick={() => {
                  ChangeActive("fruit");
                  handleFilter("fruit");
                }}
              >
                Fruits
              </h5>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5
                className={
                  active === "vegetable"
                    ? "btn btn-dark  d-block text-primary active"
                    : "btn btn-dark  d-block"
                }
                onClick={() => {
                  ChangeActive("vegetable");
                  handleFilter("vegetable");
                }}
              >
                Vegetables
              </h5>
            </Link>
          </Nav>
          <div>
            <SearchBar onChange={HandleChange} onSubmit={handleFormSubmit} />
            <Link to="/">
              <Button
                variant="outline-primary"
                className="m-2"
                onClick={() => {
                  ChangeActive("");
                  handleFormSubmit(search);
                }}
              >
                Search
              </Button>
            </Link>
            <Link to="/cart">
              <button
                className={
                  active === "cart"
                    ? "btn btn-dark float-right text-primary active m-2"
                    : "btn btn-dark float-right m-2"
                }
                onClick={() => {
                  ChangeActive("cart");
                }}
              >
                <i className=" fa fa-shopping-cart fa-lg m-2 " />
                <span>{countCart}</span>
              </button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NaviBar;
