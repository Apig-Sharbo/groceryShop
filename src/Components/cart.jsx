import React from "react";
import _ from "lodash";

const Cart = ({
  data,
  handleIncrementCart,
  handleDecrementCart,
  handleRemoveFromCart
}) => {
  const tds = _.map(data, item => {
    return (
      <tr key={item.id}>
        <td className="col-lg-2">{item.name}</td>
        <td className="col-lg-2">{item.count}</td>
        <td className="col-lg-2">
          {"\u0024"}
          {item.price * item.count}
        </td>
        <td className="col-lg-1">
          <button
            className="btn btn-dark"
            onClick={() => handleIncrementCart(item.id)}
          >
            +
          </button>
        </td>
        <td className="col-lg-1">
          <button
            className="btn btn-dark"
            onClick={() => handleDecrementCart(item.id)}
          >
            -
          </button>
        </td>
        <td className="col-lg-2">
          <button
            className="btn btn-dark"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  });

  let totalPrice = _.reduce(
    data,
    (acc, cur) => {
      return acc + cur.price * cur.count;
    },
    0.0
  );
  //console.log(Object.values(data))
  return (
    <div className="container">
      <table className="table table-dark justify-content-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).length !== 0 ? (
            tds
          ) : (
            <tr>
              <td className="text-center" colSpan="3">
                Your Cart is Empty!
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td className="col-7" colSpan="2">
              <h4>Total price:</h4>
            </td>
            <td className="col-4" colSpan="4">
              <h4>
                {"\u0024"}
                {totalPrice}
              </h4>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
