function checkRelevance(dateToCheck) {
  return Date() == Date(Date.parse(dateToCheck));
}

function getRelevantArticle(articlesAsJson) {
  var relevantArticle = articlesAsJson.filter(checkRelevance)[0];

  console.log(relevantArticle);
  window.onload = function () {
    document.getElementById("relevant-card-title").innerHTML =
      relevantArticle.title;
    document.getElementById("relevant-card-text").innerHTML =
      relevantArticle.summary;

    let link = document.getElementById("relevant-card-link");
    link.href = relevantArticle.link;
    link.innerText = "Läs mer";

    let unformatedTime = relevantArticle.published;
    unformatedTime = unformatedTime.replace("T", " ");
    formatedTime = unformatedTime.substring(0, 19);

    let relevantCardText = document.getElementById("relevant-card-text");
    relevantCardText.innerHTML += "<br/><br/>" + formatedTime;

    let relevantCardImage = document.getElementById("relevant-card-image");
    relevantCardImage.src = "https://www.migrationsverket.se/images/18.6f22e3491708b85db6e302b/1591710118257/Migrationsverket_logotyp_frizon_R%C3%96D_rgb.png";
  };
}
