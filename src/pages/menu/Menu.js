import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./menu.css";

function Menu() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product.items);
  const mainData = useSelector((state) => state.product);

  const increment = () => {
    dispatch({ type: "Add_To_Cart" });
  };

  const decrement = () => {
    dispatch({ type: "Remove_From_Cart" });
  };

  return (
    <div className="imageContainer">
      {data.map((item) => {
        return (
          <div>
            <img className="images" src={item.img} alt={item.name} />
            <h5>{item.id}.</h5>
            <div className="itemContent">
              <h1>{item.name}</h1>
              <p>Price:{item.price}</p>
              <button onClick={increment} className="incrementBtn">
                +
              </button>
              <button onClick={decrement} className="decrementBtn">
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
