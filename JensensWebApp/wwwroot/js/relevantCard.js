function checkRelevance(dateToCheck) {
  return Date() == Date(Date.parse(dateToCheck));
}

function getRelevantArticle(articlesAsJson) {
  let relevantArticle = findRelevantArticle(articlesAsJson);

  console.log(relevantArticle);

  window.onload = function () {
    setTitle(relevantArticle.title);
    setSummary(relevantArticle.summary);
    setTags(
      relevantArticle.summary,
      document.getElementById("relevant-card-tags")
    );
    setLink(relevantArticle.link);
    setPublishedTime(relevantArticle.published);
    setupImageButton("relevant-card-image", "add-image-button");
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

/*
URL for testing:
https://www.migrationsverket.se/images/18.6f22e3491708b85db6e302b/1591710118257/Migrationsverket_logotyp_frizon_R%C3%96D_rgb.png
*/
