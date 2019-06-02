import React from "react";
import cardImage from "../images/404.png";

const MyCard = ({item,handleCart,}) => {
  return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4">
        <div className="item-list card-deck bg-dark">
          <div className="card bg-secondary">
            <img
                className="card-img-top  align-self-xs-center align-items-center justify-content-center "
                src={item.image ? item.image : cardImage}
                alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text">
                Price: {"\u0024"}
                {item.price}{' \u002f '}kg
              </h6>
              <button
                  className="btn btn-dark"
                  onClick={() => handleCart(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyCard;
