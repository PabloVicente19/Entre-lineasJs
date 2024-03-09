const cardContainer = document.querySelector(".card-content")
const products = [...books];
const init = () => {};

const createCart = (product) => {
  const {title,genre,author,image,price} = product
  return`<li class="card">
  <img src="${image}" alt="">
  <h4>${title}</h4>
  <h5>${author}</h5>
  <h6>${price}</h6>
  <button>agregar</button>
</li>`
}
const renderCard = () => {
  cardContainer.innerHTML = products.map(createCart).join("");
}
renderCard()