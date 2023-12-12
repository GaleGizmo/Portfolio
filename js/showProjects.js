import { projectsData } from "./data.js";
import { showProjectDetails } from "./projectDetails.js";

export function showProjects(language) {
    const projectsContainer = document.getElementById("projects_container");
    projectsContainer.innerHTML = "";
    const sectionTitle = document.getElementById("portfolioTitle");
    language === "es" ? (sectionTitle.textContent = "Proyectos") : (sectionTitle.textContent = "Projects");
    for (const project of projectsData) {
      
      const projectDiv = document.createElement("div");
      projectDiv.className = "project_card";
      const backgroundImageDiv = document.createElement("div");
      backgroundImageDiv.style.backgroundImage = `url(${project.images[0]})`;
      projectDiv.appendChild(backgroundImageDiv);
      const title = document.createElement("h3");
      const techs = document.createElement("p");
      const button = document.createElement("button");
      button.className = "button";
    
      
      techs.innerHTML = project.techs.frontend + " / " + project.techs.backend;
      language === "es" ? ((button.textContent = "DETALLES"), (title.textContent=project.esName)) : ((button.textContent = "MORE INFO"), (title.textContent=project.engName));
      
      projectDiv.appendChild(title);
      projectDiv.appendChild(techs);
      projectDiv.appendChild(button);
      projectDiv.addEventListener("mouseover", function () {
        backgroundImageDiv.style.opacity = "0.2";
        const elementsToAnimate = [techs, title, button];
        elementsToAnimate.forEach((el) => {
          el.style.opacity = 1;
          el.style.transform = "translateY(0)";
        });
      });
      projectDiv.addEventListener("mouseout", function () {
        backgroundImageDiv.style.opacity = "1";
        const elementsToAnimate = [techs, title, button];
        elementsToAnimate.forEach((el) => {
          el.style.opacity = 0;
          el.style.transform = "translateY(-30px)";
        });
        button.style.transform = "translateY(30px)";
      });
    
      projectsContainer.appendChild(projectDiv);
      button.addEventListener("click", function () {
        showProjectDetails(project, language);
      });
    }
}