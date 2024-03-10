const cardContainer = document.querySelector(".card-content");
const products = [...books];
const init = () => {};

const createCart = (product) => {
  const { id, title, genre, author, image, price } = product;
  return `<li class="card">
  <img class="card-img" src="${image}" alt="${title}">
  <h4 class="card-title">${title}</h4>
  <h5 class="card-author">${author}</h5>
  <h6 class="card-price">$ ${price}</h6>
  <button class="card-btn" data-id=${id}>Agregar</button>
</li>`;
};
const renderCard = () => {
  cardContainer.innerHTML = products.map(createCart).join("");
};
renderCard();
