import Item1 from "../../Assets/productsImg/burger.jpeg";
import Item2 from "../../Assets/productsImg/coke.jpeg";
import Item3 from "../../Assets/productsImg/fries.jpeg";
import Item4 from "../../Assets/productsImg/pepsi.jpeg";

const initialState = {
  items: [
    { id: 1, name: "Hamburger", price: 200, img: Item1, count: 0 },
    { id: 2, name: "Fries", price: 80, img: Item2, count: 0 },
    { id: 3, name: "Coke", price: 120, img: Item3, count: 0 },
    { id: 4, name: "Pepsi", price: 260, img: Item4, count: 0 },
  ],
  addedItems: [],
  total: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_To_Cart":

    case "Remove_From_Cart":

    default:
      return state;
  }
};

export default productReducer;
