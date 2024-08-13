function addTagsToNormalCards() {
  let bodies = Array.from(document.getElementsByClassName("card-body"));
  let cardTexts = Array.from(document.getElementsByClassName("card-text"));

  console.log(bodies.length + "     ||      " + cardTexts.length);
  cardTexts.forEach((textElement, index) => {
    let child = document.createElement("small");
    let id = "card-tags-" + index;
    child.id = id;
    child.className = "card-tags";
    child.textContent = "Nyckelord: ";

    setTags(textElement.textContent, child);
    bodies[index].appendChild(child);
  });
}
