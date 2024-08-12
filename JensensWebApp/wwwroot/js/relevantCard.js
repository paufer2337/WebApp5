function checkRelevance(dateToCheck) {
  return Date() == Date(Date.parse(dateToCheck));
}

function getRelevantArticle(articlesAsJson) {
  let relevantArticle = findRelevantArticle(articlesAsJson);

  console.log(relevantArticle);

  window.onload = function () {
    setTitle(relevantArticle.title);
    setSummary(relevantArticle.summary);
    setLink(relevantArticle.link);
    setPublishedTime(relevantArticle.published);
    setupImageButton();
  };
}

function findRelevantArticle(articlesAsJson) {
  return articlesAsJson.filter(checkRelevance)[0];
}

function setTitle(title) {
  document.getElementById("relevant-card-title").innerHTML = title;
}

function setSummary(summary) {
  document.getElementById("relevant-card-text").innerHTML = summary;
}

function setLink(linkUrl) {
  const link = document.getElementById("relevant-card-link");
  link.href = linkUrl;
  link.innerText = "Läs mer";
}

function setPublishedTime(publishedTime) {
  let unformattedTime = publishedTime.replace("T", " ");
  let formattedTime = unformattedTime.substring(0, 19);

  const relevantCardText = document.getElementById("relevant-card-text");
  relevantCardText.innerHTML += "<br/><br/>" + formattedTime;
}

function setupImageButton() {
  const relevantCardImage = document.getElementById("relevant-card-image");
  const imageButton = document.getElementById("image-button");

  imageButton.addEventListener("click", (event) => {
    // Used to ensure the image does not disappear.
    event.preventDefault();

    let urlDialog = prompt("Ange URL till önskad bild");

    console.log("User input URL:", urlDialog);

    if (urlDialog) {
      console.log("Image source set to:", urlDialog);
      relevantCardImage.src = urlDialog;
    } else {
      console.log("No URL provided by the user.");
    }
  });
}

/*
https://www.migrationsverket.se/images/18.6f22e3491708b85db6e302b/1591710118257/Migrationsverket_logotyp_frizon_R%C3%96D_rgb.png
*/
