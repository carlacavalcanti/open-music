export function initUi() {
  const butons = document.querySelectorAll(".button__genero");
  const botaoModo = document.querySelector(".modo");
  const body = document.querySelector("body");

  butons.forEach((element) => {
    element.addEventListener("click", () => {
      butons.forEach((btn) => {
        btn.classList.remove("active");
      });
      element.classList.add("active");
    });
  });

  const modoSalvo = localStorage.getItem("modo");
  if (modoSalvo === "escuro") {
    body.classList.add("modo-escuro");
    botaoModo.src = "./src/assets/icons/sun.svg";
  }

  botaoModo.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");

    if (body.classList.contains("modo-escuro")) {
      botaoModo.src = "./src/assets/icons/sun.svg";
      localStorage.setItem("modo", "escuro");
    } else {
      botaoModo.src = "./src/assets/icons/moon.svg";
      localStorage.setItem("modo", "claro");
    }
  });
}
