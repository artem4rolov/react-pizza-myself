export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("cart");

  if (data) {
    return JSON.parse(data);
  } else return [];
};
