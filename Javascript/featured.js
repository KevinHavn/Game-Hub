const featuredUrl =
  "https://gamehub.kevinhavn.no/wp-json/wc/store/products?Consumer_key=ck_66d9428b1208042429ba50951ddd347e00ecd825&Consumer_secret=cs_976806e579a8575b402f036ac49115b1c6d81683&featured=true";

async function getFeatured() {
  const response = await fetch(featuredUrl);

  const featured = await response.json();
  console.log(featured);
  return featured;
}

function createFeaturedHtml(featured) {
  const featuredContainer = document.querySelector("#featuredcontainer");

  const preorder = document.createElement("h1");
  preorder.innerText = "Pre-Order Available Now";
  preorder.classList = "center";
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

  const details = document.createElement("a");
  details.innerText = "Details";
  details.setAttribute("href", "details.html" + "?id=" + featured.id);
  details.classList.add("center");
}

async function main() {
  const featured = await getFeatured();
  createFeaturedHtml(featured);
}
main();
