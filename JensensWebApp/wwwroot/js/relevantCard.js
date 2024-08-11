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

    document.getElementById("relevant-card-text").innerHTML +=
      "<br/><br/>" + formatedTime;
  };
}
