// updateText.js
import { helloText, navAndHelloText, contactText, aboutText } from "./data.js";
import { aboutTitle, aboutContent, viewCV  } from "./aboutme.js";
import { showProjects } from "./showProjects.js";
import { showContacts } from "./showContact.js";
import {
  nameH2,
  nameH3,
  portfolioButton,
  aboutLink,
  contactLink,
} from "./navandhello.js";

export let currentLanguage = "eng";

export function updateText() {
  const lang = currentLanguage === "eng" ? 0 : 1;
  portfolioButton.innerText =
    navAndHelloText[lang][`${currentLanguage}PortfolioButton`];
  aboutLink.innerText = navAndHelloText[lang][`${currentLanguage}AboutLink`];
  contactLink.innerText =
    navAndHelloText[lang][`${currentLanguage}ContactLink`];
  nameH2.innerText = helloText[lang][`${currentLanguage}HelloH2`];
  nameH3.innerText = helloText[lang][`${currentLanguage}HelloH3`];
  aboutTitle.innerText = aboutText[lang][`${currentLanguage}AboutTitle`];
  aboutContent.innerText = aboutText[lang][`${currentLanguage}AboutContent`];
  viewCV.innerHTML = aboutText[lang][`${currentLanguage}ViewCV`];
  viewCV.innerHTML +=
    '<img class="about__icon" src="./assets/img/viewcv.png" />';
  const contactTitle = contactText[lang][`${currentLanguage}SectionTitle`];
  const contactNamePlaceholder =
    contactText[lang][`${currentLanguage}NamePlaceholder`];
  const contactMessagePlaceholder =
    contactText[lang][`${currentLanguage}MessagePlaceholder`];
  const sendText = contactText[lang][`${currentLanguage}SendMessage`];
  const successMessage = contactText[lang][`${currentLanguage}SuccessMessage`];
  const errorMessage = contactText[lang][`${currentLanguage}ErrorMessage`];

  showContacts(
    contactTitle,
    contactNamePlaceholder,
    contactMessagePlaceholder,
    sendText,
    successMessage,
    errorMessage
  );
  showProjects(currentLanguage);
}

export function changeLanguage(language) {
  currentLanguage = language;
  updateText();
}
