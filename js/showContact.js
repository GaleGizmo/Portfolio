export function showContacts(title, namePlaceholder, messagePlaceholder, sendButtonText, successMessage, errorMessage) {
  const sectionTitle = document.getElementById("contactTitle");
  sectionTitle.innerText = title;
  const statusMessage = document.getElementById("contact_form__status");
  const form = document.getElementById("contact_form");
  const sendButton=document.getElementById("sendMessage")
  sendButton.innerText=sendButtonText
  
  function showMessage(message, color) {
    statusMessage.textContent = message;
    statusMessage.style.display = "block";
    setTimeout(() => {
      statusMessage.style.color = color;
      statusMessage.style.bottom = "200px";
      statusMessage.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      statusMessage.style.opacity = 0;
      setTimeout(() => {
        statusMessage.style.display = "none";
        statusMessage.style.bottom = "0px";
      }, 1000);
    }, 2000);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    event.target.action = "https://formspree.io/f/xyyqodqq";
    try {
      const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        showMessage(successMessage, "white");
        form.reset();
      } else {
        const responseData = await response.json();
        if (Object.hasOwnProperty(data, "errors")) {
          showMessage(
            data["errors"].map((error) => error["message"]).join(", "),
            "red"
          );
        } else {
          showMessage(errorMessage, "red");
        }
      }
    } catch (error) {
      showMessage(errorMessage, "red");
    }
  }
  form.addEventListener("submit", handleSubmit);

  function setupInput(inputElement, placeholder) {
    inputElement.setAttribute("placeholder", placeholder);
  
    inputElement.addEventListener("click", function () {
      hideOrShowPlaceholder(inputElement, true);
    });
  
    inputElement.addEventListener("blur", function () {
      hideOrShowPlaceholder(inputElement, false, placeholder);
    });
  }
  
  function hideOrShowPlaceholder(inputElement, hide, placeholder) {
    if (inputElement.value === "") {
      inputElement.placeholder = hide ? "" : placeholder;
    }
  }
  
  // Uso
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  
  setupInput(nameInput, namePlaceholder);
  setupInput(emailInput, "E-mail");
  setupInput(messageInput, messagePlaceholder);
  
}
