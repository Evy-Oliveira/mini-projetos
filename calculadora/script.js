const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".keys button");

function calcular() {
  try {
    display.value += "=" + eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function apagarCaracter() {
  display.value = display.value.slice(0, -1);
}

function apagarTudo() {
  display.value = "";
  console.log("apagou tudo");
}

function insereCaracterPermitido(caracterPermitido) {
  display.value += caracterPermitido;
}

for (let button of buttons) {

  button.addEventListener("click", (e) => {
    if (button.id === "clear") {
      apagarTudo();
    } else if (button.id === "backspace") {
      apagarCaracter();
    } else if (button.id === "equals") {
      calcular();
    } else {
      insereCaracterPermitido(button.textContent);
    }
  });
}

document.addEventListener("keydown", (e) => {
  let key = e.key;

  switch (key) {
    case "Backspace":
      apagarCaracter();
      break;
    case "Enter":
      calcular();
      break;
    case "Escape":
      apagarTudo();
      break;
    default:
      const permitidos = "1234567890.+-*/";
      if (permitidos.includes(key)) {
        insereCaracterPermitido(key); 
      }
      break;
  }
});

