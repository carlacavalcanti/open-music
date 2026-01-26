import { initUi } from "./ui.js";
import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";

initUi();
applyInputRangeStyle();

const cards = document.querySelector(".cards");

function creatCard(album) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const img = document.createElement("img");
  img.src = album.img;

  const title = document.createElement("h2");
  title.innerText = album.title;

  const divFlex = document.createElement("div");
  divFlex.classList.add("flex", "name");
  const nameArtist = document.createElement("p");
  nameArtist.innerText = album.band;
  const nameGenero = document.createElement("p");
  nameGenero.innerText = album.genre;

  divFlex.append(nameArtist, nameGenero);

  const divValor = document.createElement("div");
  divValor.classList.add("flex");
  const valor = document.createElement("p");
  valor.innerText = album.price;
  valor.classList.add("valor");
  const button = document.createElement("button");
  button.innerText = "Comprar";

  divValor.append(valor, button);
  divCard.append(img, title, divFlex, divValor);
  cards.appendChild(divCard);
}

function renderAlbuns(lista) {
  cards.innerHTML = "";
  lista.forEach((album) => {
    creatCard(album);
  });
}
renderAlbuns(albumList);
