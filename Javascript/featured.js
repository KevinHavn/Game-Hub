const featuredUrl =
  "https://admin.kevinhavn.no/wp-json/wc/store/products?Consumer_key=ck_5c94f4c0ad956c202014a0b172a7304db5977b7a&Consumer_secret=cs_a877919e05e89f8ebe4b727598b85b7ce4bf0c2f&featured=true";

async function getFeatured() {
  const response = await fetch(featuredUrl);
  const featuredArray = await response.json();

  featuredArray.forEach((featured) => {
    console.log(featured);
    const featuredContainer = document.querySelector("#featuredcontainer");

    const preorder = document.createElement("h1");
    preorder.innerText = "Pre-Order Available Now";
    preorder.classList.add("center");
    featuredContainer.append(preorder);

    const title = document.createElement("h2");
    title.innerText = featured.name;
    title.classList = "center";
    featuredContainer.append(title);

    for (let i = 0; i < featured.images.length; i++) {
      const imgData = featured.images[i];
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      featuredContainer.append(img);
    }

    const price = document.createElement("p");
    price.innerText =
      featured.prices.price / 100 + " " + featured.prices.currency_code;
    price.classList.add("center");
    featuredContainer.append(price);

    const cart = document.createElement("a");
    cart.innerText = "Cart";
    cart.setAttribute("href", "cart.html");
    cart.classList.add("center", "cartbutton", "pseudobutton");
    featuredContainer.append(cart);

    const details = document.createElement("a");
    details.innerText = "Details";
    details.setAttribute("href", "details.html" + "?id=" + featured.id);
    details.classList.add("center", "detailsbutton", "pseudobutton");
    featuredContainer.append(details);
  });
}

getFeatured();
