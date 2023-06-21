const accountDetails = document.querySelector(".modal__info-details");

const langSelect = document.querySelector(`.change-lang`)

accountDetails.addEventListener("click", () => {
  const valueToCopy = accountDetails.textContent;

  const tempElement = document.createElement("textarea");
  tempElement.value = valueToCopy;

  document.body.appendChild(tempElement);

  tempElement.select();
  tempElement.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(tempElement);
  
  if (langSelect.value === `en`) {

    langEN()

  } else if (langSelect.value === `ua`) {
    
    langUA()

  }
});

// EN
function langEN() {
  const copyText = document.querySelector(`.info-copy-text`)

  copyText.style.color = "#14b4f3";
  copyText.textContent = "copied";

  setTimeout(() => {
    copyText.style.color = "rgba(28, 28, 28, 0.829)";
    copyText.textContent = "copy";
  }, 2000);
}

// UA
function langUA() {
  const copyText = document.querySelector(`.info-copy-text`)

  copyText.style.color = "#14b4f3";
  copyText.textContent = "скопійовано";

  setTimeout(() => {
    copyText.style.color = "rgba(28, 28, 28, 0.829)";
    copyText.textContent = "скопіювати";
  }, 2000);
}