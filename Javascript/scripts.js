const productsUrl =
  "https://admin.kevinhavn.no/wp-json/wc/store/products?Consumer_key=ck_5c94f4c0ad956c202014a0b172a7304db5977b7a&Consumer_secret=cs_a877919e05e89f8ebe4b727598b85b7ce4bf0c2f";
const loading = document.querySelector("#Loading");

async function getProducts() {
  const response = await fetch(productsUrl);

  const products = await response.json();
  console.log(products)
  return products;
}

function createProductHTML(product) {
  const gamesGrid = document.querySelector("#gamesgrid");

  const productContainer = document.createElement("div");
  productContainer.classList.add("container", "flex", "column");
  productContainer.id = product.id;

  const title = document.createElement("h2");
  title.innerText = product.name;
  title.classList.add("center");
  productContainer.append(title);

  for (let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    productContainer.append(img);
  }

  const price = document.createElement("p");
  price.innerText = product.prices.price/100 + " " + product.prices.currency_code;
  price.classList.add("center")
  productContainer.append(price);

  const cart = document.createElement("a")
  cart.innerText = "Cart"
  cart.setAttribute("href", "cart.html")
  cart.classList.add("center", "cartbutton", "pseudobutton")
  productContainer.append(cart)

  const details = document.createElement("a");
  details.innerText = "Details";
  details.setAttribute("href", "details.html" + "?id=" + product.id);
  details.classList.add("center", "pseudobutton", "detailsbutton");
  productContainer.append(details);

  loading.remove();
  gamesGrid.append(productContainer);
}
function createProductsHTML(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    createProductHTML(product);
  }
}

async function main() {
  const products = await getProducts();
  createProductsHTML(products);
}

main();
