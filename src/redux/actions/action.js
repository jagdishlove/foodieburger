export const addToCart = (id) => {
  return {
    type: "ADD_PRODUCT",
    payload: id,
  };
};
export const removeTOcart = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};
