export function initUi() {
  const butons = document.querySelectorAll(".button__genero");

  butons.forEach((element) => {
    element.addEventListener("click", () => {
      butons.forEach((btn) => {
        btn.classList.remove("active");
      });
      element.classList.add("active");
    });
  });

  const botaoModo = document.querySelector(".modo");
  const body = document.querySelector("body");
  const cards = document.querySelectorAll(".card");
  const cabecalho = document.querySelector(".header-fixed");

  botaoModo.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    cabecalho.classList.toggle("modo-escuro");
    if (cabecalho.classList.contains("modo-escuro")) {
      botaoModo.src = "./src/assets/icons/sun.svg";
    } else {
      botaoModo.src = "./src/assets/icons/moon.svg";
    }

    cards.forEach((card) => {
      card.classList.toggle("card-modo-escuro");
    });
  });
}
