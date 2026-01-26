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

  botaoModo.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
      botaoModo.src = "./src/assets/icons/sun.svg";
    } else {
      botaoModo.src = "./src/assets/icons/moon.svg";
    }
  });
}
