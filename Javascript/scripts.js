const productsUrl =
  "https://gamehub.kevinhavn.no/wp-json/wc/store/products?Consumer_key=ck_66d9428b1208042429ba50951ddd347e00ecd825&Consumer_secret=cs_976806e579a8575b402f036ac49115b1c6d81683";
const loading = document.querySelector("#Loading")

async function getProducts() {
  const response = await fetch(productsUrl);

  const products = await response.json();
  console.log(products)
  return products;
}

function createProductHTML(product) {
  const gamesGrid = document.querySelector("#gamesgrid");

  const productContainer = document.createElement("div");
  productContainer.classList.add("container");
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
  //   for (let i = 0; i < product.prices; i++) {
  //     const priceData = product.prices[i];
  //     const price = priceData.price;
  //     price.innerText = price;
  //     console.log(product.prices) }

  const details = document.createElement("a");
  details.innerText = "Details";
  details.setAttribute("href", "details.html" + "?id=" + product.id)
  details.classList.add("center")
  
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