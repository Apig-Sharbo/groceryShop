import React, { Component } from "react";
import "./App.css";
//import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/navBar";
import Cards from "./Components/Cards";
import getItems from "./db/fakeDB";
import { Route, Switch } from "react-router-dom";
import Cart from "./Components/cart";
//import _ from "lodash";

class App extends Component {
  state = {
    shopItems: [],
    cartList: {}
  };

  componentDidMount() {
    this.setState({ shopItems: getItems() });
  }

  handleIncrementCart = id => {
    /*----------------------------- this is it -------------------------*/
    const obj = { ...this.state.cartList };
    // console.log(obj[id]);
    obj[id].count += 1;
    //console.log(obj[id]);
    this.setState({ cartList: obj });
  };
  handleDecrementCart = id => {
    const obj = { ...this.state.cartList };
    // console.log(obj[id]);
    if (obj[id].count > 1) obj[id].count -= 1;
    //console.log(obj[id]);
    this.setState({ cartList: obj });
  };
  handleRemoveFromCart = id => {
    const obj = { ...this.state.cartList };
    delete obj[id];
    this.setState({ cartList: obj });
  };

  handleFilter = category => {
    let shopItems = [];
    if (category === "all") {
      shopItems = getItems();
    } else {
      shopItems = getItems().filter(item => {
        return category === item.category;
      });
    }

    this.setState({ shopItems });
  };

  handleFormSubmit = search => {
    if (search !== "") {
      let regular = new RegExp(search, "i");
      // console.log(array.filter(m => !m.title.search(regular)));
      const shopItems = getItems().filter(m => !m.name.search(regular));
      this.setState({ shopItems });
    } else {
      this.setState({ shopItems: getItems() });
    }
  };

  handleCart = Item => {
    //cartList is an obj, id mapping
    let obj = { ...this.state.cartList };
    if (obj.hasOwnProperty(Item.id)) obj[Item.id].count++;
    else {
      obj[Item.id] = Item;
      obj[Item.id].count = 1;
    }
    this.setState({ cartList: obj });
  };

  render() {
    // console.log(this.state.cartList);
    return (
      <div className="bg-dark text-light">
        <div className="row m-0">
          <NaviBar
            handleFilter={this.handleFilter}
            handleFormSubmit={this.handleFormSubmit}
            data={this.state.cartList}
          />
        </div>
        <Switch>
          {
            /*this is the node part that should be added*/
            /*axios.post('/cart',{
              id:5
            })
            router.post('/cart',function(req,res)={

            })*/
          }
          <Route
            path="/cart"
            component={() => {
              return (
                <Cart
                  data={this.state.cartList}
                  handleIncrementCart={this.handleIncrementCart}
                  handleDecrementCart={this.handleDecrementCart}
                  handleRemoveFromCart={this.handleRemoveFromCart}
                />
              );
            }}
          />
          <Route
            path="/"
            render={() => {
              return (
                <div className="container-fluid card-group col-10">
                  <Cards
                    data={this.state.shopItems}
                    handleCart={this.handleCart}
                  />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
