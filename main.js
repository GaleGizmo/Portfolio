// main.js
import { updateText, changeLanguage } from "./js/updateText.js";

document
  .getElementById("engFlag")
  .addEventListener("click", function () {
    changeLanguage("eng");
  });

document
  .getElementById("esFlag")
  .addEventListener("click", function () {
    changeLanguage("es");
  });

updateText();
