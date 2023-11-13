
export const nameH2 = document.getElementById("nameH2");
export const nameH3 = document.getElementById("nameH3");

export const burguerDiv = document.getElementById("burguer");
export const nav = document.getElementById("nav-link");
burguerDiv.addEventListener("click", function () {
    
  nav.classList.toggle("nav-active");
  burguerDiv.classList.toggle("burguer-active");

})

export const portfolioButton = document.getElementById("goToPortfolio");
portfolioButton.addEventListener("click", function () {
  goToSection("divPortfolio");
});

export const aboutLink = document.getElementById("aboutLink");
aboutLink.addEventListener("click", function () {
  goToSection("divAbout");
});

export const contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", function () {
  goToSection("divContact");
});
function goToSection(sectionName) {
    
    nav.classList.remove("nav-active");
    burguerDiv.classList.remove("burguer-active");
    

    const sectionToGo = document.getElementById(sectionName);
    sectionToGo.scrollIntoView();
  }