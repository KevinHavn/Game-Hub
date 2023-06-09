const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url =
  "https://admin.kevinhavn.no/wp-json/wc/store/products/" +
  id +
  "?Consumer_key=ck_5c94f4c0ad956c202014a0b172a7304db5977b7a&Consumer_secret=cs_a877919e05e89f8ebe4b727598b85b7ce4bf0c2f/";

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

  const description = document.createElement("p");
  description.innerHTML = detail.description;
  detailContainer.append(description);

  detailsGrid.append(detailContainer);
}

async function main() {
  const detail = await fetchDetail();
  createDetailHtml(detail);
}

main();
