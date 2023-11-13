export function showProjectDetails(project, lang) {
  const projectDetailsDiv = document.getElementById("project_detail");
  const projectDetailsContent = document.getElementById(
    "project_detail__content"
  );
  const projectDetailTitle = document.getElementById("project_detail__title");
  const projectDetailDescription = document.getElementById(
    "project_detail__description"
  );
  const projectDetailFw = document.getElementById("project_detail__fw");
  const projectDetailTechnologies = document.getElementById(
    "project_detail__libraries"
  );
  const carrousel = document.getElementById("project_detail__carrousel");
  const projectDetailUrl = document.getElementById("project_detail__website");
  const projectDetailGithub = document.getElementById("project_detail__github");
  const closeIcon = document.getElementById("close_icon");

  const projectImages = document.getElementById("carrousel_img");
  projectImages.innerHTML=""
  const carrouselIndicator = document.getElementById("indicator");

  //carga el contenido del proyecto
  projectDetailTitle.innerHTML =
    lang === "es" ? project.esName : project.engName;
  projectDetailDescription.innerHTML =
    lang === "es" ? project.esDescription : project.engDescription;
  projectDetailFw.textContent =
    "FRONTEND: " +
    project.techs.frontend +
    " / BACKEND: " +
    project.techs.backend +
    " / DDBB: " +
    project.techs.ddbb;
  projectDetailTechnologies.textContent =
    lang === "es"
      ? "Librerías: " + project.libraries
      : "Libraries: " + project.libraries;
  projectDetailUrl.setAttribute("href", project.url);
  const buttonWebText = lang === "es" ? "Ver Web" : "View Website";
  project.url ? projectDetailUrl.innerHTML = `<button class="button button__project">${buttonWebText} <img
  class="" src="./assets/img/externallink2.png" /></button>`: projectDetailUrl.innerHTML = "";
  projectDetailGithub.setAttribute("href", project.github);
  const buttonGitText = lang === "es" ? "Ver Código" : "View Code";
   projectDetailGithub.innerHTML = `<button class="button button__project">${buttonGitText}<img class=""
  src="./assets/img/github3.png" /></button>`;

  //crea los indicadores de imagen mostrada
  for (let i = 0; i < project.images.length; i++) {
    const imageDot = document.createElement("span");
    imageDot.className = "carrousel_imageDot";
    imageDot.setAttribute("id", "imageDotNr" + i);
    carrouselIndicator.appendChild(imageDot);
  }
  const firstDot = document.getElementById("imageDotNr0");
  firstDot.style.backgroundColor = "orange";
  projectImages.setAttribute("src", project.images[0]);
  projectImages.className = "project_img";

  projectDetailsDiv.style.display = "flex";
  carrousel.appendChild(projectImages);
  projectDetailsDiv.appendChild(carrousel);

  projectDetailsDiv.appendChild(projectDetailsContent);

  //botones para cambiar imagen
  let index = 0;

  function showImageIndicator(indexOfImage) {
    const allDots = document.querySelectorAll('[id*="imageDot"]');
    allDots.forEach(function (element) {
      element.style.backgroundColor = "#333";
    });
    document.getElementById("imageDotNr" + indexOfImage).style.backgroundColor =
      "orange";
  }
  document.getElementById("prev-btn").addEventListener("click", function () {
    index = index - 1 < 0 ? project.images.length - 1 : index - 1;
    toggleImage(index);
  });

  document.getElementById("next-btn").addEventListener("click", function () {
    index = index + 1 === project.images.length ? 0 : index + 1;
    toggleImage(index);
  });

  function toggleImage(indexOfImage) {
    projectImages.setAttribute("src", project.images[indexOfImage]);
    showImageIndicator(indexOfImage);
  }
  //cerrar detalle de proyecto
  closeIcon.addEventListener("click", () => {
    projectDetailsDiv.style.display = "none";
    const elementsToDelete = document.querySelectorAll('[id*="imageDot"]');
    elementsToDelete.forEach(function (element) {
      element.remove();
    });
  });
}
