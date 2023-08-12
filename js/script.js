import { modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notANumber, calculateIMC } from "./utils.js";

//variáveis - variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => {
  AlertError.close();
};

inputHeight.oninput = () => {
  AlertError.close();
};

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;
  const result = calculateIMC(weight, height);
  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  displayResultMessage(result);
};

function displayResultMessage(result) {
  modal.message.innerText = `Seu IMC é de ${result}`;

  modal.open();
}
