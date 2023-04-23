const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://gamehub.kevinhavn.no/wp-json/wc/store/products/" +
  id +
  "?Consumer_key=ck_66d9428b1208042429ba50951ddd347e00ecd825&Consumer_secret=cs_976806e579a8575b402f036ac49115b1c6d81683/";

async function fetchDetail() {
  const response = await fetch(url);

  const detail = await response.json();
  console.log(detail);
  return detail;
}

function createDetailHtml(detail) {
  const detailsGrid = document.querySelector("#detailsgrid");

  const detailContainer = document.createElement("div");
  detailContainer.classList.add("container", "flex", "column");

  const title = document.createElement("h1");
  title.innerText = detail.name;
  title.classList.add("center");
  detailContainer.append(title);

  for (let i = 0; i < detail.images.length; i++) {
    const imgData = detail.images[i];
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    detailContainer.append(img);
  }

  const description = document.createElement("p")
  description.innerText = detail.description;
  detailContainer.append(description)

  detailsGrid.append(detailContainer)
}

async function main() {
  const detail = await fetchDetail();
  createDetailHtml(detail);
}

main();
