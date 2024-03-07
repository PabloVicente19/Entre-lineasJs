const saveLocalStorage = (product) => {
  return localStorage.setItem("libros", JSON.stringify(product));
};
